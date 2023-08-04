/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1 = '', num2 = ''

  while (l1) {
    num1 = l1.val + num1
    l1 = l1.next
  }

  while (l2) {
    num2 = l2.val + num2
    l2 = l2.next
  }

  const sum = (BigInt(num1) + BigInt(num2)).toString()

  let list = null
  let i = 0
  while (i < sum.length) {
    list = new ListNode(sum[i], list)
    i++
  }

  return list
}