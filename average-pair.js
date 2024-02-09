/**
 * Given an array of nums and a target average num determine if two nums average in array equal the target
 * input: sorted array of nums [], targetAvg number
 * output: Boolean
 * there may be more than one pair that matches average target
 *
 * [1, 2, 3], 2.5 => true 2 + 3 / 2 === 2.5
 * [], 4 => false empty array
 * [1, 2, 3], 2 => true 3 + 1 === 2
 *
 * look at two points in the array
 *  beginning and end
 * while beginning is less than end
 *  take two values
 *  when added and divided by two do they equal target?
 *      yes? return true
 * if while condition is not met and loop ends
 *    return false
 */

//Given a numeric array and a targetAvg num; do two values average equal the num
function averagePair(nums, target) {
  if (nums.length === 0) {
    return false;
  }

  let begin = 0;
  let end = nums.length - 1;

  while (begin < end) {

    if (nums[begin] + nums[end] / 2 === target) {
      return true;
    }

  }

  return false;
}