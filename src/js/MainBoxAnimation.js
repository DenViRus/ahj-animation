/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
export default class MainBoxAnimation {
  animate({ duration, draw, timing }) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }
      const progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  makeEaseInOut(timing) {
    return (timeFraction) => {
      if (timeFraction < 0.5) {
        return timing(2 * timeFraction) / 2;
      }
      return (2 - timing(2 * (1 - timeFraction))) / 2;
    };
  }

  linear(timeFraction) {
    return timeFraction;
  }

  animationOpacity(animateEl, duration) {
    this.animate({
      duration,
      timing: this.makeEaseInOut(this.linear),
      draw(progress) {
        animateEl.style.opacity = progress;
      },
    });
  }

  animationOpacityReverse(animateEl, duration) {
    this.animate({
      duration,
      timing: this.makeEaseInOut(this.linear),
      draw(progress) {
        animateEl.style.opacity = 1 - progress;
      },
    });
  }
}
