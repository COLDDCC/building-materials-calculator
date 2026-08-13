// 单位系统：所有 compute() 一律接收「英制基准单位」。
// length -> ft, small -> in, area -> sq ft, volume -> cu ft / cu yd, weight -> lb
// k = 1 公制单位等于多少个英制基准单位。base = metricValue * k

export const KINDS = {
  ft:    { imperial: 'ft',    metric: 'm',   k: 3.280839895 },
  in:    { imperial: 'in',    metric: 'cm',  k: 0.3937007874 },
  sqft:  { imperial: 'sq ft', metric: 'm²',  k: 10.76391042 },
  cuft:  { imperial: 'cu ft', metric: 'm³',  k: 35.31466672 },
  cuyd:  { imperial: 'cu yd', metric: 'm³',  k: 1.307950619 },
  lb:    { imperial: 'lb',    metric: 'kg',  k: 2.204622622 },
  ton:   { imperial: 'tons',  metric: 't',   k: 1.10231131 },
  pct:   { imperial: '%',     metric: '%',   k: 1 },
  count: { imperial: '',      metric: '',    k: 1 },
  usd:   { imperial: '$',     metric: '$',   k: 1 },
};

export function unitLabel(kind, system) {
  const u = KINDS[kind];
  if (!u) return '';
  return system === 'metric' ? u.metric : u.imperial;
}

/** 显示值 -> 基准值 */
export function toBase(value, kind, system) {
  const u = KINDS[kind];
  if (!u || system !== 'metric') return value;
  return value * u.k;
}

/** 基准值 -> 显示值 */
export function fromBase(value, kind, system) {
  const u = KINDS[kind];
  if (!u || system !== 'metric') return value;
  return value / u.k;
}

export function round(n, d = 0) {
  const f = Math.pow(10, d);
  return Math.round(n * f) / f;
}

export function money(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}
