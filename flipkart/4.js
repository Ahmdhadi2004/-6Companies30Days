/* Winner of the Game */
var game = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  var winnerOfTheGame = function(game) {
    var winner = null;
    for (var i = 0; i < game.length; i++) {
      if (game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
        winner = game[i][0];
        break;
      }
      if (game[0][i] === game[1][i] && game[1][i] === game[2][i]) {
        winner = game[0][i];
        break;
      }
    }
    if (game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
      winner = game[0][0];
    }
    if (game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
      winner = game[0][2];
    }
    return winner;
  };
  console.log(winnerOfTheGame(game));