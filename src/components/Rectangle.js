const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'




class Rectangle extends React.Component {
  constructor(props) {
        super(props)
    log(props)
    this.y = this.props.y
    this.context = this.props.context
    this.x = this.props.x
    this.ch = this.props.ch
    this.width = this.props.width
    this.height = this.props.height
    this.kb = this.props.kb
    }

  draw() {
    
    
    const ctx = this.context
    // Hexadecimal Color Red
    ctx.beginPath()
    ctx.save()
    ctx.fillStyle="#FF0000";
    ctx.rect(this.x, this.y, this.width, this.height)
    ctx.fill()
    ctx.restore()
    ctx.closePath()
    return this
    }

  move(){
    if(this.kb) {
      if(this.kb.rightPressed) {
      this.x += 7
    }
    else if(this.kb.leftPressed) {
      this.x -= 7
    }
    }
    
    return this
  }
}

export default Rectangle
