function Cell(position, value = 2) {
  this.x = position.x;
  this.y = position.y;
  this.value = value;

  this.previousPosition = null;
}

Cell.prototype.updatePosition = function(position) {
  this.previousPosition = { x: this.x, y: this.y };

  this.x = position.x;
  this.y = position.y;
};

export default Cell;
