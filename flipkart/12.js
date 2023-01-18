/* Check If a String Contains All Binary Codes of Size K */
function hasAllCodes(s, k) {
    let set = new Set();
    for (let i = 0; i <= s.length - k; i++) {
      set.add(s.substring(i, i + k));
    }
    return set.size === Math.pow(2, k);
  }