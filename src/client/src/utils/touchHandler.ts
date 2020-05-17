export default class {
  touchStartX = 0;
  touchStartY = 0;
  touchEndX = 0;
  touchEndY = 0;
  touches: any = null;
  dX = 0;
  dY = 0;
  isZoom = false;
  zoomedIn = false;
  constructor(
    private swipeHorHandler: (dir: number) => void,
    private swipeVerHandler: (dir: number) => void,
    private pinchZoomHandler: (scale: number) => void,
    private zoomPanHandler: (dX: number, dY: number) => void
  ) {}

  touchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].screenX;
    this.touchStartY = event.touches[0].screenY;
    if (event.touches.length > 1) {
      this.touches = event.touches;
      this.isZoom = true;
      this.zoomedIn = true;
    }
  }

  touchEnd(event: TouchEvent) {
    if (this.isZoom) {
      this.isZoom = false;
      return;
    }
    if (!this.zoomedIn) {
      this.touchEndX = event.changedTouches[0].screenX;
      this.touchEndY = event.changedTouches[0].screenY;
      this.dX = Math.abs(this.touchEndX - this.touchStartX);
      this.dY = Math.abs(this.touchEndY - this.touchStartY);
      if (!(this.dX < 30 && this.dY < 30)) {
        this.handleSwipe();
      }
    }
  }

  touchMove(event: TouchEvent) {
    if (this.touches !== null && event.touches.length > 1) {
      this.pinchZoomHandler(this.calcScale(event.touches));
    } else if (this.zoomedIn) {
      this.touchEndX = event.changedTouches[0].screenX;
      this.touchEndY = event.changedTouches[0].screenY;
      this.dX = this.touchEndX - this.touchStartX;
      this.dY = this.touchEndY - this.touchStartY;
      this.zoomPanHandler(this.dX / 35, this.dY / 25);
    }
    event.preventDefault();
  }

  doubleTap(event: TouchEvent) {
    alert('doubletap');
    event.preventDefault();
    if (this.zoomedIn) {
      this.pinchZoomHandler(0);
    } else {
      this.pinchZoomHandler(2);
    }
  }

  touchCancel(event: TouchEvent) {
    event.preventDefault();
  }

  calcScale(touches: TouchList) {
    const d = this.calcLength(touches) - this.calcLength(this.touches);
    return d / 1000;
  }

  calcLength(touches: TouchList) {
    const a = touches[0];
    const b = touches[1];
    if (touches.length < 2) return 0;
    return Math.sqrt(Math.pow(a.screenX - b.screenX, 2) + Math.pow(a.screenY - b.screenY, 2));
  }

  handleSwipe() {
    if (this.dX <= this.dY) {
      if (this.touchEndY < this.touchStartY) {
        this.swipeVerHandler(-1);
        return;
      }
      if (this.touchEndY > this.touchStartY) {
        this.swipeVerHandler(1);
        return;
      }
    }

    this.setDefault();
  }

  setDefault() {
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.dX = 0;
    this.dY = 0;
    this.isZoom = false;
    if (this.zoomedIn) this.touches = null;
  }
}
