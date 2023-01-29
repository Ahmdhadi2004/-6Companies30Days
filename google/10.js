/* Network Delay Time */
var networkDelayTime = function(times, N, K) {
    var graph = {};
    for (var i = 0; i < times.length; i++) {
      var edge = times[i];
      var source = edge[0];
      var destination = edge[1];
      var time = edge[2];
      if (graph[source] === undefined) {
        graph[source] = {};
      }
      graph[source][destination] = time;
    }
    var distances = {};
    var queue = [];
    queue.push(K);
    distances[K] = 0;
    while (queue.length > 0) {
      var node = queue.shift();
      var distance = distances[node];
      var neighbors = graph[node];
      if (neighbors !== undefined) {
        for (var neighbor in neighbors) {
          if (distances[neighbor] === undefined || distances[neighbor] > distance + neighbors[neighbor]) {
            distances[neighbor] = distance + neighbors[neighbor];
            queue.push(neighbor);
          }
        }
      }
    }
    var max = 0;
    for (var node in distances) {
      if (distances[node] > max) {
        max = distances[node];
      }
    }
    if (Object.keys(distances).length < N) {
      return -1;
    }
    return max;
  };