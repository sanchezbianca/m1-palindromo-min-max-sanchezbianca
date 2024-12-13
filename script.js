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
  let minValue = arr[0];
  let maxValue = 0;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return (newArray = [minValue, maxValue]);
}
