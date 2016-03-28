// https://leetcode.com/problems/search-for-a-range/
// https://leetcode.com/submissions/detail/57553799/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    return [left_search(nums, target),right_search(nums, target)];

};

var left_search = function(nums, target){
    for(var i = 0; i < nums.length; i++){
        if( nums[i] == target ){
            return i;
        }
    }
    return -1;
}

var right_search = function(nums, target){
    for(var i = nums.length-1; i >= 0 ; i--){
        if( nums[i] == target ){
            return i;
        }
    }
    return -1;
}
