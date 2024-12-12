function isPalindrome(str) {
  let invertedString = "";
  for (let i = 0; i < str.length; i++) {
    invertedString = str[i] + invertedString;
  }
  if (
    str.toLowerCase().replace(/ /g, "") ===
    invertedString.toLowerCase().replace(/ /g, "")
  ) {
    return true;
  }
  return false;
}

function arrayMaxMin(arr) {
  /* Seu código aqui */
}
