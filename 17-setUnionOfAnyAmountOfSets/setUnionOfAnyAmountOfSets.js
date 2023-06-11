function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const unionSet = new Set();
  
  for(const set of args){
    for(const element of set){
      unionSet.add(element);
    }
  }
  return unionSet;
  
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
