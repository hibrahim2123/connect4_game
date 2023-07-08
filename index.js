document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");

  const result = document.querySelector("#result");
  const firstPlayer = document.querySelector(".firstPlayer");
  console.log(firstPlayer);
  const secondPlayer = document.querySelector(".secondPlayer");
  const displayCurrentPlayer = document.querySelector("#current-player");
  let currentPlayer = 1;
  const winningArrays = [
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7],
    [5, 6, 7, 8],
    //satır2
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [11, 12, 13, 14],
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    //satır3
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    //4.satır
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    [39, 40, 41, 42],
    [40, 41, 42, 43],
    [41, 42, 43, 44],
    //5.satır
    [45, 46, 47, 48],
    [46, 47, 48, 49],
    [47, 48, 49, 50],
    [48, 49, 50, 51],
    [49, 50, 51, 52],
    [50, 51, 52, 53],
    //6.satır
    [54, 55, 56, 57],
    [55, 56, 57, 58],
    [56, 57, 58, 59],
    [57, 58, 59, 60],
    [58, 59, 60, 61],
    [59, 60, 61, 62],
    //7.satır
    [63, 64, 65, 66],
    [64, 65, 66, 67],
    [65, 66, 67, 68],
    [66, 67, 68, 69],
    [67, 68, 69, 70],
    [68, 69, 70, 71],
    //8.satır
    [72, 73, 74, 75],
    [73, 74, 75, 76],
    [74, 75, 76, 77],
    [75, 76, 77, 78],
    [76, 77, 78, 79],
    [77, 78, 79, 80],

    ////sütun
    //1.sutun
    [0, 9, 18, 27],
    [9, 18, 27, 36],
    [18, 27, 36, 45],
    [27, 36, 45, 54],
    [36, 45, 54, 63],
    [45, 54, 63, 72],
    //2.sutun
    [1, 10, 19, 28],
    [10, 19, 28, 37],
    [19, 28, 37, 46],
    [28, 37, 46, 55],
    [37, 46, 55, 64],
    [46, 55, 64, 73],
    //3.sutun
    [2, 11, 20, 29],
    [11, 20, 29, 38],
    [20, 29, 38, 47],
    [29, 38, 47, 56],
    [38, 47, 56, 65],
    [47, 56, 65, 74],
    //4.sutun
    [3, 12, 21, 30],
    [12, 21, 30, 39],
    [21, 30, 39, 48],
    [30, 39, 48, 57],
    [39, 48, 57, 66],
    [48, 57, 66, 75],
    //5. sutun
    [4, 13, 22, 31],
    [13, 22, 31, 40],
    [22, 31, 40, 49],
    [31, 40, 49, 58],
    [40, 49, 58, 67],
    [49, 58, 67, 76],
    //6.sutun
    [5, 14, 23, 32],
    [14, 23, 32, 41],
    [23, 32, 41, 50],
    [32, 41, 50, 59],
    [41, 50, 59, 68],
    [50, 59, 68, 77],
    //7.sutun
    [6, 15, 24, 33],
    [15, 24, 33, 42],
    [24, 33, 42, 51],
    [33, 42, 51, 60],
    [42, 51, 60, 69],
    [51, 60, 69, 78],
    //8.sutun
    [7, 16, 25, 34],
    [16, 25, 34, 43],
    [25, 34, 43, 52],
    [34, 43, 52, 61],
    [43, 52, 61, 70],
    [52, 61, 70, 79],
    //9.sutun
    [8, 17, 26, 35],
    [17, 26, 35, 44],
    [26, 35, 44, 53],
    [35, 44, 53, 62],
    [44, 53, 62, 71],
    [53, 62, 71, 80],
    //across(çapraz)
    [0, 10, 20, 30],
    [1, 11, 21, 31],
    [2, 12, 22, 32],
    [3, 13, 23, 33],
    [4, 14, 24, 34],
    [5, 15, 25, 35],

    //----
    [9, 19, 29, 39],
    [10, 20, 30, 40],
    [11, 21, 31, 41],
    [12, 22, 32, 42],
    [13, 23, 33, 43],
    [14, 24, 34, 44],

    //-----
    [18, 28, 38, 48],
    [19, 29, 39, 49],
    [20, 30, 40, 40],
    [21, 31, 41, 51],
    [22, 32, 42, 52],
    [23, 33, 43, 53],

    //----
    [27, 37, 47, 57],
    [28, 38, 48, 58],
    [29, 39, 49, 59],
    [30, 40, 50, 60],
    [31, 41, 51, 61],
    [32, 42, 52, 62],

    //---
    [36, 46, 56, 66],
    [37, 47, 57, 67],
    [38, 48, 58, 68],
    [39, 49, 59, 69],
    [40, 50, 60, 70],
    [41, 51, 61, 71],

    //---
    [45, 55, 65, 75],
    [46, 56, 66, 76],
    [47, 57, 67, 77],
    [48, 58, 68, 78],
    [49, 59, 69, 79],
    [50, 60, 70, 80],

    //----
    //ters çapraz
    //---
    [3, 11, 19, 27],
    [4, 12, 20, 28],
    [5, 13, 21, 29],
    [6, 14, 22, 30],
    [7, 15, 23, 31],
    [8, 16, 24, 32],
    //---
    [12, 20, 28, 36],
    [13, 21, 29, 37],
    [14, 22, 30, 38],
    [15, 23, 31, 39],
    [16, 24, 32, 40],
    [17, 25, 33, 41],
    //---
    [21, 29, 37, 45],
    [22, 30, 38, 46],
    [23, 31, 39, 47],
    [24, 32, 40, 48],
    [25, 33, 41, 49],
    [26, 34, 42, 50],
    //----
    [30, 38, 46, 54],
    [31, 39, 47, 55],
    [32, 40, 48, 56],
    [33, 41, 49, 57],
    [34, 42, 50, 58],
    [35, 43, 51, 59],
    //----
    [39, 47, 55, 63],
    [40, 48, 56, 64],
    [41, 49, 57, 65],
    [42, 50, 58, 66],
    [43, 51, 59, 67],
    [44, 52, 60, 68],
    //----
    [48, 56, 64, 72],
    [49, 57, 65, 73],
    [50, 58, 66, 74],
    [51, 59, 67, 75],
    [52, 60, 68, 76],
    [53, 61, 69, 77],
  ];
  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const square1 = squares[winningArrays[y][0]];
      const square2 = squares[winningArrays[y][1]];
      const square3 = squares[winningArrays[y][2]];
      const square4 = squares[winningArrays[y][3]];

      //check those squares to see if they all have the class of player-one
      if (
        square1.classList.contains("player-one") &&
        square2.classList.contains("player-one") &&
        square3.classList.contains("player-one") &&
        square4.classList.contains("player-one")
      ) {
        result.innerHTML = "Player One Wins!";
      }
      //check those squares to see if they all have the class of player-two
      if (
        square1.classList.contains("player-two") &&
        square2.classList.contains("player-two") &&
        square3.classList.contains("player-two") &&
        square4.classList.contains("player-two")
      ) {
        result.innerHTML = "Player Two Wins!";
      }
    }
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      //if the square below your current square is taken, you can go ontop of it
      if (
        squares[i + 9].classList.contains("taken") &&
        !squares[i].classList.contains("taken")
      ) {
        if (currentPlayer == 1) {
          squares[i].classList.add("taken");
          squares[i].classList.add("player-one");
          const satır = Math.round(i / 9);
          const sütun = (i % 9) + 1;
          firstPlayer.innerHTML = `First Player: satır ${satır} ve sütun ${sütun}`;
          currentPlayer = 2;
          displayCurrentPlayer.innerHTML = currentPlayer;
        } else if (currentPlayer == 2) {
          squares[i].classList.add("taken");
          squares[i].classList.add("player-two");
          const satır = Math.round(i / 9);
          const sütun = (i % 9) + 1;
          secondPlayer.innerHTML = `Second Player: satır ${satır} ve sütun ${sütun}`;
          currentPlayer = 1;
          displayCurrentPlayer.innerHTML = currentPlayer;
        }
      } else alert("cant go here");
      checkBoard();
    };
  }
});
