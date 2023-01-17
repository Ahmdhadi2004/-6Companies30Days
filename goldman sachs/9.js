/* Initial Public Offering */
var IPO = function(k, W, Profits, Capital) {
    var arr = [];
    for (var i = 0; i < Profits.length; i++) {
      arr.push({
        profit: Profits[i],
        capital: Capital[i]
      });
    }
    arr.sort(function(a, b) {
      return a.capital - b.capital;
    });
    var pq = new PriorityQueue();
    var i = 0;
    while (W < k && i < arr.length) {
      if (arr[i].capital <= W) {
        pq.offer(arr[i].profit);
        i++;
      } else {
        break;
      }
    }
    while (W < k && !pq.isEmpty()) {
      W += pq.poll();
      k--;
      while (i < arr.length && arr[i].capital <= W) {
        pq.offer(arr[i].profit);
        i++;
      }
    }
    return W;
  };
  var PriorityQueue = function() {
    this.arr = [];
  };
  PriorityQueue.prototype.offer = function(val) {
    var index = this.arr.length;
    this.arr.push(val);
    while (index > 0) {
      var parent = Math.floor((index - 1) / 2);
      if (this.arr[parent] >= this.arr[index]) {
        break;
      }
      var temp = this.arr[parent];
      this.arr[parent] = this.arr[index];
      this.arr[index] = temp;
      index = parent;
    }
  };
  PriorityQueue.prototype.poll = function() {
    var result = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();
    var index = 0;
    while (index < this.arr.length) {
      var left = index * 2 + 1;
      var right = index * 2 + 2;
      if (left >= this.arr.length) {
        break;
      }
      var next = left;
      if (right < this.arr.length && this.arr[right] > this.arr[left]) {
        next = right;
      }
      if (this.arr[index] >= this.arr[next]) {
        break;
      }
      var temp = this.arr[index];
      this.arr[index] = this.arr[next];
      this.arr[next] = temp;
      index = next;
    }
    return result;
  };
  PriorityQueue.prototype.isEmpty = function() {
    return this.arr.length === 0;
  };