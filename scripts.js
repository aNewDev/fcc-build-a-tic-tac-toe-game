
// determine every possible 3 number array combination from playerOnePlays sorted
// turn those arrays into strings
// compare those strings to winningCombos

var winningCombos = ['123', '456', '789', '147', '258', '369', '159', '357'];
var currentCombos = [];

var playerOnePlays = [8, 6, 3, 1, 7];
var playerTwoPlays = [];



function sortAndCreateArrays(arr) {
  var sortedArray = arr.sort();
  for (var i = 0; i < sortedArray.length - 2; i++) {
    for (var j = i + 1; j < sortedArray.length - 1; j++) {
      for (var k = j + 1; k < sortedArray.length; k++) {
        currentCombos.push('' + sortedArray[i] + sortedArray[j] + sortedArray[k]);
      }
    }
  }
}

function didPlayerWin(arr) {
  if (arr.length > 2) {
    sortAndCreateArrays(arr);
    for (var i = 0; i < currentCombos.length; i++) {
      for (var j = 0; j < winningCombos.length; j++) {
        if (currentCombos[i] === winningCombos[j]) {
          return true;
        }
      }
    }
    return false;
  }
}

didPlayerWin(playerOnePlays);
