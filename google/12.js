/* Restore IP Addresses */
var restoreIPAddresses = function(s) {
    var ips = [];
    var restore = function(s, parts) {
      if (parts.length === 4) {
        if (s.length === 0) {
          ips.push(parts.join('.'));
        }
      } else {
        for (var i = 1; i <= 3; i++) {
          if (s.length >= i && parseInt(s.substring(0, i)) <= 255) {
            parts.push(s.substring(0, i));
            restore(s.substring(i), parts);
            parts.pop();
            if (s.charAt(0) === '0') {
              break;
            }
          }
        }
      }
    };
    restore(s, []);
    return ips;
  };