/* Most Popular Video Creator */
var mostPopularCreator = function(videos) {
    var map = {};
    for (var i = 0; i < videos.length; i++) {
      var video = videos[i];
      if (!map[video.creator]) {
        map[video.creator] = 0;
      }
      map[video.creator] += video.views;
    }
    var result = [];
    var max = -Infinity;
    for (var creator in map) {
      if (map[creator] > max) {
        result = [creator];
        max = map[creator];
      } else if (map[creator] === max) {
        result.push(creator);
      }
    }
    return result;
  };