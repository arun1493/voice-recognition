const getAllUnderScoreOccuranceIndexes = (string: string) => {
  // Wildcard for tab navigation
  const regex = /_{2,}\S*_{2,}/gi;
  const indexPairs = [];
  let matchArr: any = [];
  while ((matchArr = regex.exec(string)) !== null) {
    indexPairs.push([matchArr.index, regex.lastIndex]);
  }
  return indexPairs;
};

export { getAllUnderScoreOccuranceIndexes };
