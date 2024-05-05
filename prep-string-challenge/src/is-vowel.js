/* exported isVowel */
function isVowel(char) {
  let arrayVowels = 'aeiouAEIOU';
  for (index = 0; index < arrayVowels.length; index++) {
    if (char == arrayVowels[index]) {
      return true;
    }
  }
  return false;
}
