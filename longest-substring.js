/*
Given a string s, find the length of the longest substring without repeating characters.

Example #1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example #2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example #3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function (s) {
  let longest = ''

  for (let i = 0; i < s.length; i++) {
    const slice = s.slice(i)
    for (let j = 0; j < slice.length; j++) {
      const prev = slice.slice(0, j)
      console.log(prev)
      const current = slice[j]
      console.log(current)
      if (prev.includes(current)) {
        longest = prev
      }
    }
  }
  console.log(longest)
  return longest.length
}