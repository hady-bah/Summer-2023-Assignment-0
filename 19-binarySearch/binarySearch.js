class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    const search = (low, high) => {
      if (low > high) {
        return false;
      }

      const mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] > target) {
        return search(low, mid - 1);
      } else {
        return search(mid + 1, high);
      }
    };

    return search(0, nums.length - 1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
