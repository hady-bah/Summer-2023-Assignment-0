function pairSum(nums, target) {
  // Insert code here;
  const numSet = new Set();
  
  for(let i = 0; i < nums.length; i++){
    const complement = target - nums[i];
    if (numSet.has(complement)){
       return true;  
     }
   numSet.add(nums[i]);  
  }
  
  return false; 
}

// Do not edit this line;
module.exports = pairSum;
