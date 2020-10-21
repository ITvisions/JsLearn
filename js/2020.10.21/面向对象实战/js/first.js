const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.width;
const height = canvas.height = window.height;


function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomColor() {
  return 'rgba(' +
    random(0, 255) + ',' +
    random(0, 255) + ',' +
    random(0, 255) + ')';
}

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function () {
  ctx.beginPath();  //声明我们现在要开始在纸上画一个图形了
  ctx.fillStyle = this.color; //定义这个图形的颜色 — 这个值正是小球的颜色属性
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); //方法来在纸上画出一段圆弧
  // x 和 y 是圆弧的中心的坐标 —— 也就是小球的中心坐标。
  // 圆弧的半径 —— 小球的半径。
  // 最后两个参数是开始和结束，也就是圆弧对应的夹角，单位以弧度表示。这里我们用的是 0 和 2 * PI，也就是 360 度（如果你设置成 0 和 1 * PI，则只会出现一个半圆，也就是 180 度）
  ctx.fill();  //声明我们结束了以 beginPath() 开始的绘画,并且使用我们之前设置的颜色进行填充。
}

let testBall = new Ball(50, 100, 4, 4, 'blue', 10)
testBall.draw();