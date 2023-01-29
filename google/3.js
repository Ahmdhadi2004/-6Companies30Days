/* Sort an array */
var sortArray = function(array) {
    var sorted = [];
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      var index = 0;
      while (index < sorted.length && sorted[index] < element) {
        index++;
      }
      sorted.splice(index, 0, element);
    }
    return sorted;
  };