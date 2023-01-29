/* Destroying Asteroids */
var asteroidCollision = function(asteroids) {
    var stack = [];
    for (var i = 0; i < asteroids.length; i++) {
      var asteroid = asteroids[i];
      if (asteroid > 0) {
        stack.push(asteroid);
      } else {
        while (stack.length > 0 && stack[stack.length - 1] > 0) {
          if (stack[stack.length - 1] === -asteroid) {
            stack.pop();
            break;
          } else if (stack[stack.length - 1] > -asteroid) {
            break;
          } else {
            stack.pop();
          }
        }
        if (stack.length === 0 || stack[stack.length - 1] < 0) {
          stack.push(asteroid);
        }
      }
    }
    return stack;
  };