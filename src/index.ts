import { WebClient } from '@slack/web-api';
import strava from 'strava-v3';
import { format, UserStats } from './UserStats';

(async () => {
  const clubID = process.env.CLUB_ID;

  if (!clubID) {
    throw new Error('CLUB_ID is not given');
  }

  const channel = process.env.SLACK_CHANNEL;

  if (!channel) {
    throw new Error('SLACK_CHANNEL is not given');
  }

  const stats = new Map<string, UserStats>();

  (await strava.clubs.listActivities({ id: clubID })).forEach(({ athlete, distance, moving_time, total_elevation_gain }) => {
    const name = athlete.firstname + ' ' + athlete.lastname;
    const entry = stats.has(name) ? stats.get(name)! : { distance: 0, moving_time: 0, total_elevation_gain: 0 };

    entry.distance += distance;
    entry.moving_time += moving_time;
    entry.total_elevation_gain += total_elevation_gain;

    stats.set(name, entry);
  });

  const slack = new WebClient(process.env.SLACK_TOKEN);
  await slack.chat.postMessage({
    text: Array.from(stats.keys())
      .map((name) => format(name, stats.get(name)!))
      .join('\n'),
    channel,
  });
})();
