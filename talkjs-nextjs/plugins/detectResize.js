import { EventEmitter } from 'events';

class DetectResize {
  constructor() {
    this.viewportWidth = 0;
    this.viewportHeight = 0;
    this.scrollbarWidth = this.getScrollbarWidth();
    this.isSp = false;
    this.isPortrait = false;
  }

  getScrollbarWidth() {
    let element = document.createElement('div');
    element.style.visibility = 'hidden';
    element.style.overflow = 'scroll';
    document.body.appendChild(element);
    const scrollbarWidth = element.offsetWidth - element.clientWidth;
    document.body.removeChild(element);
    document.documentElement.style.setProperty('--scrollBarWidth', `${scrollbarWidth}px`);
    return scrollbarWidth;
  }

  storeViewportSize() {
    this.viewportWidth = window.innerWidth;
    this.viewportHeight = window.innerHeight;
  }

  decidePcOrSp(mql) {
    if (mql.matches) {
      this.isSp = false;
    } else {
      this.isSp = true;
    }
  }

  decideOrientation(mql) {
    if (!mql.matches) {
      this.isPortrait = true;
    } else {
      this.isPortrait = false;
    }
  }
}

const resizeObserver = new ResizeObserver((entries) => {
  // https://medium.com/developers-arena/nodejs-event-emitters-for-beginners-and-for-experts-591e3368fdd2
  // https://css-tricks.com/a-first-look-at-aspect-ratio/
  // https://developer.mozilla.org/ja/docs/Web/API/ResizeObserver

  for (let entry of entries) {
    const resultInfoMatch = window.matchMedia('(min-aspect-ratio: 7/10)');
    detectResize.decidePcOrSp(resultInfoMatch);
    detectResize.decideOrientation(resultInfoMatch);
    detectResize.storeViewportSize();
  }
});

let detectResize = new DetectResize();

resizeObserver.observe(document.querySelector('html'));

window.ROOT.resizeInfo = detectResize;
