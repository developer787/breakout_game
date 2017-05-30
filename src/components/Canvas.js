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
    const cw = config.result.width
    const ch = config.result.height
    const radius = 40
    // const setResolution = new HiRes({canvas: config.canvas, ctx: config.ctx})
    // setResolution.init()
    
    // can.style.width = w + "px";
    // can.style.height = h + "px";

      //const mouse = new MouseEvent(canvas)
    
    
    // const ballRadius = 20
    // const paddleHeight = 10
    // const paddleWidth = 75
    // const paddleX = (vw - paddleWidth) / 2
    // const paddle_props = {
    //   kb: keyboard,
    //   width: paddleWidth,
    //   height: paddleHeight,
    //   x: paddleX,
    //   context: config.ctx,
    //   audio: config.audio,
    //   ch: vh
    // }
    const bola_props = {
      x: cw / 2,
      y: ch - 50,
      dx: 4,
      dy: -5,
      ch: ch,
      cw: cw,
      context: ctx,
      audio: audio,
      radius: radius
    }
    
    const bola = new Circle(bola_props)
    // const paddle = new Square(paddle_props)

    requestAnimationFrame(function gameLoop() {
      ctx.clearRect(0, 0, cw, ch)
      //   // Start drawing
      
      bola.draw().move()
      // paddle.draw().move()

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
export default Canvas
