/* Cheapest Flights with K stops (Flight system in Europe) */
var findCheapestPrice = function(n, flights, src, dst, K) {
    var map = {};
    for (var i = 0; i < flights.length; i++) {
      var flight = flights[i];
      if (!map[flight[0]]) {
        map[flight[0]] = {};
      }
      map[flight[0]][flight[1]] = flight[2];
    }
    var queue = [];
    var visited = {};
    queue.push([src, 0, 0]);
    while (queue.length > 0) {
      var current = queue.shift();
      var city = current[0];
      var price = current[1];
      var stops = current[2];
      if (city === dst) {
        return price;
      }
      if (stops > K) {
        continue;
      }
      if (visited[city]) {
        continue;
      }
      visited[city] = true;
      if (map[city]) {
        for (var nextCity in map[city]) {
          queue.push([nextCity, price + map[city][nextCity], stops + 1]);
        }
      }
    }
    return -1;
  };