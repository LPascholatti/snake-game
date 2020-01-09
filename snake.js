function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;

  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }
}