/* exported capitalize */
function capitalize(word) {
  lowerCaseWords = word.slice(1).toLowerCase();
  return word.charAt(0).toUpperCase() + lowerCaseWords;
}
