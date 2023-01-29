/* Generate Random point in a circle */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
  };
  /**
   * @return {number[]}
   */
  Solution.prototype.randPoint = function() {
    var x = Math.random() * this.radius * 2 - this.radius;
    var y = Math.random() * this.radius * 2 - this.radius;
    while (x * x + y * y > this.radius * this.radius) {
      x = Math.random() * this.radius * 2 - this.radius;
      y = Math.random() * this.radius * 2 - this.radius;
    }
    return [x + this.x_center, y + this.y_center];
  };
  /**
   * Your Solution object will be instantiated and called as such:
   * var obj = new Solution(radius, x_center, y_center)
   * var param_1 = obj.randPoint()
   */