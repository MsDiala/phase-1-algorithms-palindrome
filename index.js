function isPalindrome(word) {
  // Convert the word to lowercase for case insensitivity
  word = word.toLowerCase();

  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = word.length - 1;

  // Iterate over the word until the pointers meet
  while (start < end) {
    // If characters at the pointers don't match, it's not a palindrome
    if (word[start] !== word[end]) {
      return false;
    }
    // Move the pointers towards the center
    start++;
    end--;
  }

  // If the loop completes without returning false, it's a palindrome
  return true;
}

// Test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("madam"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
