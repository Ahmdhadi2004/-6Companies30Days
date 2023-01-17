/* People aware of secret */
var findSecretWord = function(wordlist, master) {
    var n = wordlist.length;
    var count = 0;
    while (count < 10) {
      var guess = wordlist[Math.floor(Math.random() * n)];
      var x = master.guess(guess);
      if (x === 6) {
        return;
      }
      var wordlist2 = [];
      for (var i = 0; i < n; i++) {
        if (match(guess, wordlist[i]) === x) {
          wordlist2.push(wordlist[i]);
        }
      }
      wordlist = wordlist2;
      n = wordlist.length;
      count++;
    }
  };
  var match = function(a, b) {
    var count = 0;
    for (var i = 0; i < 6; i++) {
      if (a[i] === b[i]) {
        count++;
      }
    }
    return count;
  };