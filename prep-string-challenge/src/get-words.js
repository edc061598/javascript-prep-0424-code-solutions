/* exported getWords */
function getWords(string) {
  const emptyString = '';
  for (let index = 0; index < string.length; index++) {
    if (string.length > index) {
      return string.split(' ');
    } else {
    }
  }
  return string.split(emptyString);
}
