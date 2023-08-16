//Given an integer x, return true if x is a palindrome, and false otherwise.

//Solution converting to string
var isPalindrome = function (x) {
  let opposite = 0

  opposite = x % 10
}

//Solution not converting to string
var isPalindrome2 = function (x) {
  let total = 0

  while (true) {
    total = total * 10 + (x % 10)
    x = Math.floor(x / 10)
    if (x === 0) break
  }

  return total === x
}
