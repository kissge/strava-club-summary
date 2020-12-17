export interface UserStats {
  distance: number;
  moving_time: number;
  total_elevation_gain: number;
}

function formatSeconds(seconds: number) {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
}

export function format(name: string, stats: UserStats) {
  const dist = (stats.distance / 1000).toFixed(2);
  const time = formatSeconds(stats.moving_time);
  const elev = stats.total_elevation_gain.toFixed(0);

  return name + ': 距離 ' + dist + ' km / 運動時間 ' + time + ' / アップダウン ' + elev + ' m';
}
