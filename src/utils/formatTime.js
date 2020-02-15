export function formatTime(secounds) {
  const mm = Math.trunc(secounds / 60);
  const ss = Math.round(secounds % 60);

  return `${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`;
}
