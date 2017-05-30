import React from 'react'
import HiRes from './HiRes'
import KbEvent from '../inputs/Keyboard'


class Config extends React.Component {
  constructor(props){
    super(props)
    this.result = {}
  }
  init() {
    const audio = new(window.AudioContext || window.webkitAudioContext)()
    const canvas = this.props
    const ctx = canvas.getContext('2d')
    // Sets Canvas Resolution HDPI on mobile devices
    const setResolution = new HiRes({canvas: canvas, ctx: ctx})
    setResolution.init()
    const width = setResolution.result.width
    const height = setResolution.result.height
    // Starts Keyboard Listeners
    const keyboard = new KbEvent(canvas)
    keyboard.keyDownHandler().keyUpHandler()
    this.result = {
      canvas: canvas,
      ctx: ctx,
      audio: audio,
      width: width,
      height: height,
      keyboard: keyboard
    }
  }
}

export default Config