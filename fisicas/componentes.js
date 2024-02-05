AFRAME.registerComponent('collision-detector', {
  init: function () {
    var el = this.el;
    el.addEventListener('collide', function (e) {
      console.log('This sphere collides with: ' + e.detail.body.el.id);
    });
  },
});

AFRAME.registerComponent('apply-force', {
  init: function () {
    var el = this.el;

    el.addEventListener('click', function (e) {
      el.body.applyForce(
        new CANNON.Vec3(0, 50, -400),
        new CANNON.Vec3().copy(el.getAttribute('position'))
      );
    });
  },
});
