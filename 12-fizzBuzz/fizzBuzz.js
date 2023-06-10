function fizzBuzz(start, end) {
  // Insert code here;
  const nums = [];
  
  
  for(let i = start; i <= end; i++){
    nums.push(i);
  }
  
  for(let i = 0; i < nums.length; i++){
   if(nums[i]%3 == 0 && nums[i]%5 === 0){
     nums[i] = "FizzBuzz";
   }
   else if(nums[i]%3 === 0){
     nums[i] = "Fizz";
   }
   else if(nums[i]%5 === 0){
     nums[i] = "Buzz";
   }
    
  }  
    
  return nums;
}

// Do not edit this line;
module.exports = fizzBuzz;
