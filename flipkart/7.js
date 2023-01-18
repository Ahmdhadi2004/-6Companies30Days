/* City With the Smallest Number of Neighbors at a Threshold Distance */
var cityWithSmallestNumberOfNeighborsAtThresholdDistance = function(thresholdDistance) {
    var cityWithSmallestNumberOfNeighbors = null;
    var smallestNumberOfNeighbors = null;
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      var numberOfNeighbors = 0;
      for (var j = 0; j < cities.length; j++) {
        var otherCity = cities[j];
        if (city !== otherCity && city.distanceTo(otherCity) <= thresholdDistance) {
          numberOfNeighbors++;
        }
      }
      if (smallestNumberOfNeighbors === null || numberOfNeighbors < smallestNumberOfNeighbors) {
        cityWithSmallestNumberOfNeighbors = city;
        smallestNumberOfNeighbors = numberOfNeighbors;
      }
    }
    return cityWithSmallestNumberOfNeighbors;
  };