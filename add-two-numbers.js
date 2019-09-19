/**
 * https://leetcode.com/problems/add-two-numbers/
 * https://leetcode.com/submissions/detail/262349805/
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// [2, 4, 3]
// [5, 6, 4]
// expect [7, 0, 8]

let l1_test_1 = new ListNode(1);
// let l1_test_2 = new ListNode(4);
// let l1_test_3 = new ListNode(3);
// l1_test_1.next = l1_test_2;
// l1_test_2.next = l1_test_3;

let l2_test_1 = new ListNode(9);
let l2_test_2 = new ListNode(9);
// let l2_test_3 = new ListNode(4);
l2_test_1.next = l2_test_2;
// l2_test_2.next = l2_test_3;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, current_node, carry, first_node) {

    let both_nodes_null = (l1 === null) && (l2 === null);

    if (both_nodes_null && carry) {
        // console.log("both nodes null and carry", carry)
        current_node.next = new ListNode(carry);
        return first_node;
    }

    if (both_nodes_null) {
        // console.log("both nodes null")
        return first_node;
    }

    // get values
    let l1_val = l1 ? l1.val : 0;
    let l2_val = l2 ? l2.val : 0;
    let carry_val = carry ? carry : 0;

    // add two values
    let new_val = l1_val + l2_val + carry_val;

    // console.log("math", l1_val, "+", l2_val,"+", carry_val,"=", new_val)

    // carry
    let new_carry = 0;
    // divisible by ten?
    if (new_val >= 10) {
        new_carry = 1;
        new_val = new_val - 10;
    }

    
    let result = new ListNode(new_val);
    if (first_node && current_node) {
        current_node.next = result;
    } else {
        first_node = result;
    }
    next_node = result;

    l1_next = l1 ? l1.next : null;
    l2_next = l2 ? l2.next : null;

    // function (l1, l2, current_node, carry, first_node)
    return addTwoNumbers(l1_next, l2_next, next_node, new_carry, first_node);

};

let test_result = addTwoNumbers(l1_test_1, l2_test_1);
console.log(
    test_result.val,
    test_result.next.val,
    test_result.next.next.val
);