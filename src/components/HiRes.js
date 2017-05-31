import React from 'react'

class HiRes extends React.Component {
  constructor(props) {
    super(props)
    this.result = {}
  }
  init() {
    const ctx = this.props.ctx
    const canvas = this.props.canvas
    const PIXEL_RATIO = (function() {
      const dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio || 1

      return dpr / bsr;
    })();
    
    if (PIXEL_RATIO >= 2) {
      const vw = canvas.width = window.innerWidth * PIXEL_RATIO
      const vh = canvas.height = window.innerHeight * PIXEL_RATIO
      canvas.style.width = (vw / PIXEL_RATIO) + "px"
      canvas.style.height = (vh / PIXEL_RATIO) + "px"
      //ctx.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0)
      this.result = {
        width: vw,
        height: vh
      }
    }
    else {
      const vw = canvas.width = window.innerWidth
      const vh = canvas.height = window.innerHeight
      this.result = {
        width: vw,
        height: vh
      }
    }
  }
}

export default HiRes
