// https://leetcode.com/problems/power-of-three/
// https://leetcode.com/submissions/detail/58878609/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	if (n === 0) {
		return false;
	}
	while( n % 9 === 0 ){
		n /= 9;
	}
    return n == 1 || n == 3;
};
