function isPalindrome(word) {
  // racecar 7 / 2 == 3.5
  // aaaaaa 6 / 2 == 3
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i
    if (word[i] !== word[j]) return false;
  }
  return true
}

/* 
r a c e c a r
0 1 2 3 4 5 6
i=>       <=j


  Add your pseudocode here
  If the first letter is the same as the last letter, and the second letter is the same as the
  second to last letter, etc. until we reach the middle, return true.

  iterate through the word from the beginning to the middle
    check each letter to the corresponding letter from the end
    if any letters don't match, return false

    return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
