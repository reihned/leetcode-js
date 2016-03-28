
// https://leetcode.com/problems/counting-bits/

/**
* @param {number} num
* @return {number[]}
*/
var countBits = function(num) {
  var result = [];
  for(i = 0; i <= num; i++){
    result.push(binary_count(i));
  }//for
  return result;
};//countbits

// var to_binary = function(j){
//     result = [];
//     for(var n = j; n > 0; n/=2){
//         result.push(~~n%2);
//     }
//     return result;
// };//to binary

var binary_count = function(k){
  result = 0;
  for(var n = k; n > 0; n/=2){
    result += ~~n%2;
  }
  return result;
}; //binary count
