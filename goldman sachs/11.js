/* Invalid Transactions in an EMI */
var invalidTransactions = function(transactions) {
    var arr = [];
    for (var i = 0; i < transactions.length; i++) {
      var strs = transactions[i].split(',');
      arr.push({
        name: strs[0],
        time: parseInt(strs[1]),
        amount: parseInt(strs[2]),
        city: strs[3]
      });
    }
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].amount > 1000) {
        result.push(transactions[i]);
      }
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i].name === arr[j].name && Math.abs(arr[i].time - arr[j].time) <= 60 && arr[i].city !== arr[j].city) {
          result.push(transactions[i]);
          result.push(transactions[j]);
        }
      }
    }
    return result;
  };