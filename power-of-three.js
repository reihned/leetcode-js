// https://leetcode.com/problems/power-of-three/
// https://leetcode.com/submissions/detail/58878503/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	if (n === 0) {
		return false;
	}
	while( n%3 === 0 ){
		n /= 3;
	}
    return n == 1;
};
