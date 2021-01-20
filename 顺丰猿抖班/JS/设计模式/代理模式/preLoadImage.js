class preLoadImage {
  static LOADING_URL = 'xxx'

  constructor(imgNode) {
    this.imgNode = imgNode
  }

  setSrc(targetUrl) {
    this.imgNode.src = PreLoadImage.LOADING_URL
    const image = new Image()
    img.src = targetUrl
    image.onload = () => {
      this.imgNode.src = targetUrl
    }
  }
}

new PreLoadImage('image')