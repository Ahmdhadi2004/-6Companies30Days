/* Fruit into Baskets */
var fruitIntoBaskets = function(tree) {
    var max = 0;
    var current = 0;
    var currentFruit = null;
    for (var i = 0; i < tree.length; i++) {
      var fruit = tree[i];
      if (fruit === currentFruit) {
        current++;
      } else {
        if (current > max) {
          max = current;
        }
        current = 1;
        currentFruit = fruit;
      }
    }
    if (current > max) {
      max = current;
    }
    return max;
  };