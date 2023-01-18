/* Remove Zero Sum Consecutive Nodes */
var head = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 0,
        next: {
          value: 0,
          next: {
            value: 3,
            next: {
              value: 0,
              next: {
                value: 4,
                next: {
                  value: 0,
                  next: {
                    value: 5,
                    next: null
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  var removeZeroValueConsecutiveNodes = function(head) {
    var current = head;
    var previous = null;
    while (current) {
      if (current.value === 0) {
        if (previous) {
          previous.next = current.next;
        } else {
          head = current.next;
        }
      } else {
        previous = current;
      }
      current = current.next;
    }
    return head;
  };
  console.log(removeZeroValueConsecutiveNodes(head));