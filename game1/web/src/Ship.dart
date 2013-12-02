part of game1_web;

class Ship extends Bitmap implements Animatable {

    double _speed, _maxSpeed, _curFireRate, _fireRate, _rotRate, _halfWidth, _halfHeight;
    Asteroid _target;
    int health, maxHealth;

    set target(Asteroid value) => _target = value;

    Ship(BitmapData bitmapData, this._maxSpeed):super(bitmapData) {
      var random  = new Random();
      _speed      = _curFireRate = 0.0;
      _fireRate   = 0.1;
      pivotX      = _halfWidth  = (bitmapData.width  * 0.5).toDouble();
      pivotY      = _halfHeight = (bitmapData.height * 0.5).toDouble();
      _rotRate    = random.nextDouble();
      maxHealth   = health = 100;
      bitmapData.colorTransform(bitmapData.rectangle, new ColorTransform(1.0, 1.0, 1.0, 1.0, random.nextInt(100), random.nextInt(100), random.nextInt(100)));
      juggler.add(this);
    }

    bool advanceTime(num time) {
      for (var keyCode in (parent as Asteroids).pressedKeys) {
        switch (keyCode) {
          case 32: if ((_curFireRate -= time) <= 0) fire(); break;
          case 37: rotation -= 0.1; break;
          case 38: thrust(); break;
          case 39: rotation += 0.1; break;
          case 40: reverseThrust(); break;
        }
      }

//      if (_target != null && _target.health > 0) {
        var tx = x + _speed * cos(rotation) * time;
        var ty = y + _speed * sin(rotation) * time;

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
//      } else {
//        _target = findTarget();
//      }

      return true;
    }

    void fire() {
      var sound = resourceManager.getSound("shot1");
      var soundTransform = new SoundTransform(0.6);
      var soundChannel = sound.play(false, soundTransform);

      var proj = new Projectile(max(100.0, _speed + 200.0), rotation);
      proj.x = x;
      proj.y = y;
//      proj.target = _target;
      parent.addChild(proj);
      _curFireRate = _fireRate;
    }

    void thrust() {
      _speed = min(_speed + 10.0, _maxSpeed);
    }

    void reverseThrust() {
      _speed = max(_speed - 10.0, -_maxSpeed);
    }

    Asteroid findTarget() {
      return (parent as Asteroids).asteroids[new Random().nextInt((parent as Asteroids).asteroids.length)];
    }

    Minerals takeDamage(int damage) {
      var sound = resourceManager.getSound("impact1");
      var soundTransform = new SoundTransform(0.3);
      var soundChannel = sound.play(false, soundTransform);

      health -= damage;
      (parent as Asteroids).drawHealthBar(health / maxHealth, x - _halfWidth, y - _halfHeight);
      if (health <= 0) {
        return destroy();
      }
      return new Minerals();
    }

    /**
     * Destroys this ship and returns the minerals mined from it.
     */
    Minerals destroy() {
      Random random = new Random();
      (parent as Asteroids).ships.remove(this);
      removeFromParent();
      juggler.remove(this);
      var sound = resourceManager.getSound("explosion1");
      var soundTransform = new SoundTransform(0.4);
      var soundChannel = sound.play(false, soundTransform);

      return new Minerals(gold: random.nextInt(255), silver: random.nextInt(255), copper: random.nextInt(255));
    }
}