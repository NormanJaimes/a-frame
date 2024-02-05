AFRAME.registerComponent('change-color', {
  schema: {
    color: { default: 'pink' },
    event: { default: 'mouseenter' },
  },
  init: function () {
    var el = this.el;
    var data = this.data;
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener(data.event, function (e) {
      el.setAttribute('color', data.color);
    });
    el.addEventListener('mouseleave', function (e) {
      el.setAttribute('color', defaultColor);
    });

    this.interval = 10000;
  },
  // tick: function (t) {
  //   if (t - this.time < this.interval) {
  //     return;
  //   }
  //   console.log('Tick');
  // },
  play: function () {
    console.log('Play');
  },
  pause: function () {
    console.log('Pause');
  },
});
