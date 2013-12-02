part of game1_web;

class Projectile extends Shape implements Animatable {

  double _speed, _angle, _halfWidth, _halfHeight;
  Asteroid _target;

  set target(Asteroid value) => _target = value;

  Projectile(this._speed, [this._angle = 0.0]):super() {
    graphics.beginPath();
    graphics.rect(-4, -2, 8, 4);
    graphics.fillColor(Color.Red);
    _halfWidth = width * 0.5;
    _halfHeight = height * 0.5;
    rotation = _angle;
    juggler.add(this);
  }

  bool advanceTime(num time) {
    var dx, dy;
    if (_target != null && _target.health > 0) {
      rotation = atan2(_target.y - y, _target.x - x);
      dx = _target.x - x;
      dy = _target.y - y;
      if (dx * dx + dy * dy <= _target.width * _target.height) {
       (parent as Asteroids).minerals.add(_target.takeDamage(10, _speed * 0.5));
       (parent as Asteroids).updateHUD();
        destroy();
      }
    } else {
      for (var asteroid in (parent as Asteroids).asteroids) {
        dx = asteroid.x - x;
        dy = asteroid.y - y;
        if (dx * dx + dy * dy <= asteroid.width * asteroid.height) {
          (parent as Asteroids).minerals.add(asteroid.takeDamage(10, _speed * 0.5));
          (parent as Asteroids).updateHUD();
          destroy();
          break;
        }
      }
    }
    var tx = x + _speed * cos(_angle) * time;
    var ty = y + _speed * sin(_angle) * time;

    if (tx < _halfWidth)
      tx = stage.stageWidth - _halfWidth;
    else if (tx > stage.stageWidth - _halfWidth)
      tx = _halfWidth;

    if (ty < _halfHeight)
      ty = stage.stageHeight - _halfHeight;
    else if (ty > stage.stageHeight - _halfHeight)
      ty = _halfHeight;

    x = tx;
    y = ty;
    rotation = _angle;

    return true;
  }

  Minerals destroy() {
    removeFromParent();
    juggler.remove(this);
    return new Minerals();
  }
}