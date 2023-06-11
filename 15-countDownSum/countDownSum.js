class MySolution {
  countDownSum(num) {
    // Insert code here;
    let count = num;
    
    
    for(let i = 1; i <= num; i++){
      count += num - i;
    }
    
    return count;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
