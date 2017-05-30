class KbEvents {
  constructor(props) {
    this.canvas = props
    this.rightPressed = false
    this.leftPressed = false
  }

  keyDownHandler() {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 39) {
        this.rightPressed = true
      }
      else if (e.keyCode === 37) {
        this.leftPressed = true
      }
    }, false)
    return this

  }
  keyUpHandler() {
    window.addEventListener('keyup', e => {
      if (e.keyCode === 39) {
        this.rightPressed = false
      }
      else if (e.keyCode === 37) {
        this.leftPressed = false
      }
    }, false)
    return this
  }

  //   click() {
  //     this.canvas.addEventListener('click', e => {
  //       console.log(this.mouse)
  //     }, false);
  //     return this
  //   }

}

export default KbEvents
