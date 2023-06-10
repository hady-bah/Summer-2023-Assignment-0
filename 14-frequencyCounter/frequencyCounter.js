function frequencyCounter(word) {
  // Insert code here;
  const counter = {};
  
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    counter[char] = (counter[char] || 0) + 1;
  }
  
  return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;
