function decideOrientation() {
  const resultInfoMatch = window.matchMedia('(min-aspect-ratio: 7/10)');
  let isPortrait = false;
  if (!resultInfoMatch.matches) {
    isPortrait = true;
  }
  return isPortrait;
}

export { decideOrientation };
