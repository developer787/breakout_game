import React from 'react'
import Circle from './Circle'
import Square from './Rectangle'
import Config from './Config'



class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas()
  }
  componentDidUpdate() {
    this.updateCanvas()
  }
  updateCanvas() {
    const canvas = this.refs.canvas
    const config = new Config(canvas)
    config.init()
    const ctx = config.result.ctx
    const audio = config.result.audio
    const keyboard = config.result.keyboard
    const cw = config.result.width
    const ch = config.result.height
    const radius = 20
    // const setResolution = new HiRes({canvas: config.canvas, ctx: config.ctx})
    // setResolution.init()
    
    // can.style.width = w + "px";
    // can.style.height = h + "px";

      //const mouse = new MouseEvent(canvas)
    
    
    // const ballRadius = 20
    const paddleHeight = 10
    const paddleWidth = 75
    const paddleX = (cw - paddleWidth) / 2
    const paddleY = (ch - paddleHeight + -60) 
    const paddle_props = {
      kb: keyboard,
      width: paddleWidth,
      height: paddleHeight,
      x: paddleX,
      y: paddleY,
      ch: ch,
      cw: cw,
      context: ctx,
      audio: audio,
      ch: ch
    }
    const paddle = new Square(paddle_props)
    const bola_props = {
      x: cw / 2,
      y: ch - 100,
      dx: 4,
      dy: -5,
      ch: ch,
      cw: cw,
      context: ctx,
      audio: audio,
      radius: radius
    }
    
    const bola = new Circle(bola_props)
    
    

    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, cw, ch)
      //   // Start drawing
      
      bola.draw().move()
      paddle.draw().move()
      detectCollision(bola, paddle)
      

      // End Drawing
      requestAnimationFrame(gameLoop)
    })
  }
  render() {
    return (
      <canvas ref="canvas"/>
    )
  }
}


function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}
function detectCollision(obj1, obj2){
      if (obj1.x + obj1.dx > obj1.cw - obj1.radius || obj1.x + obj1.dx < obj1.radius) {
      obj1.dx = -obj1.dx
      console.log('side hit')
    }
    if (obj1.y + obj1.dy < obj1.radius /*|| obj1.y + obj1.dy > obj1.ch - obj1.radius*/ ) {
      obj1.dy = -obj1.dy
      console.log('top hit')
    } else if(obj1.y > obj1.ch - obj1.radius - obj2.height - (60 - obj2.height) &&
		obj1.y < obj1.ch - obj1.radius &&
		obj1.x + obj1.radius > obj2.x && obj2.x - obj1.radius < obj2.x + obj2.width) {
            obj1.dy = -obj1.dy;
    } else if(obj1.y + obj1.dy > obj1.ch - obj1.radius){
      console.log("Game Over")
      obj1.y == 200
    }
}
export default Canvas
