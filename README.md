I was thinking about creating a Slack bot that posts weekly summary of your club, but I realized that [Strava API is bullshit and it doesn't come with enough information](https://groups.google.com/g/strava-api/c/fTTkp_FmoFU/m/cCdwGEdiBwAJ).
Under this restriction, this repo provides a Slack bot that posts "summary of recent 30 workout entries of your club".
Pretty useful, huh?

# How to use

```
export STRAVA_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export CLUB_ID=xxxxxx
export SLACK_TOKEN=xxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx
export SLACK_CHANNEL=XXXXXXXX
npm run get
```
