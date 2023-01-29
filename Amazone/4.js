/* Tweet Count per Frequency */
var TweetCounts = function() {
    this.map = {};
  };
  /**
   * @param {string} tweetName
   * @param {number} time
   * @return {void}
   */
  TweetCounts.prototype.recordTweet = function(tweetName, time) {
    if (!this.map[tweetName]) {
      this.map[tweetName] = [];
    }
    this.map[tweetName].push(time);
  };
  /**
   * @param {string} freq
   * @param {string} tweetName
   * @param {number} startTime
   * @param {number} endTime
   * @return {number[]}
   */
  TweetCounts.prototype.getTweetCountsPerFrequency = function(
    freq,
    tweetName,
    startTime,
    endTime
  ) {
    var result = [];
    var interval = 0;
    if (freq === 'minute') {
      interval = 60;
    } else if (freq === 'hour') {
      interval = 3600;
    } else if (freq === 'day') {
      interval = 86400;
    }
    var start = Math.floor(startTime / interval);
    var end = Math.floor(endTime / interval);
    for (var i = start; i <= end; i++) {
      var count = 0;
      for (var j = 0; j < this.map[tweetName].length; j++) {
        var time = this.map[tweetName][j];
        if (time >= i * interval && time < (i + 1) * interval) {
          count++;
        }
      }
      result.push(count);
    }
    return result;
  };
  /**
   * Your TweetCounts object will be instantiated and called as such:
   * var obj = new TweetCounts()
   * obj.recordTweet(tweetName,time)
   * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
   */