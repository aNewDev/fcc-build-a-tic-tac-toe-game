
var players;
var whosTurn = "Player 1";
var playerOneSymbol = 'X';
var playerTwoSymbol = 'O';
var winningCombos = ['123', '456', '789', '147', '258', '369', '159', '357'];
var currentCombos = [];
var playerOnePlays = [];
var playerTwoPlays = [];

window.onload = function() {
  // box 1 control
  var oneclick = document.getElementById("oneclick");

  oneclick.onclick = function() {
    play("one", 1);
    return false;
  }

  // box 2 control
  var twoclick = document.getElementById("twoclick");

  twoclick.onclick = function() {
    play("two", 2);
    return false;
  }

  // box 3 control
  var threeclick = document.getElementById("threeclick");

  threeclick.onclick = function() {
    play("three", 3);
    return false;
  }

  // box 4 control
  var fourclick = document.getElementById("fourclick");

  fourclick.onclick = function() {
    play("four", 4);
    return false;
  }

  // box 5 control
  var fiveclick = document.getElementById("fiveclick");

  fiveclick.onclick = function() {
    play("five", 5);
    return false;
  }

  // box 6 control
  var sixclick = document.getElementById("sixclick");

  sixclick.onclick = function() {
    play("six", 6);
    return false;
  }

  // box 7 control
  var sevenclick = document.getElementById("sevenclick");

  sevenclick.onclick = function() {
    play("seven", 7);
    return false;
  }

  // box 8 control
  var eightclick = document.getElementById("eightclick");

  eightclick.onclick = function() {
    play("eight", 8);
    return false;
  }

  // box 9 control
  var nineclick = document.getElementById("nineclick");

  nineclick.onclick = function() {
    play("nine", 9);
    return false;
  }
}

function play(sqName, sqNum) {
  if (whosTurn === 'Player 1') {
    document.getElementById(sqName).innerHTML = playerOneSymbol;
    playerOnePlays.push(sqNum);
    didPlayerWin(playerOnePlays);
    whosTurn = 'Player 2';
  } else if (whosTurn === 'Player 2') {
    document.getElementById(sqName).innerHTML = playerTwoSymbol;
    playerTwoPlays.push(sqNum);
    didPlayerWin(playerTwoPlays);
    whosTurn = 'Player 1';
  }
}

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
          document.getElementById("boardborder").innerHTML = whosTurn + " Wins!";
          return true;
        }
      }
    }
    return false;
  }
}
