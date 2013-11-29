part of game1_web;

class Ship extends Bitmap implements Animatable {

    double _speed, _maxSpeed, _rotRate, _halfWidth, _halfHeight;
    Asteroid _target;
    int health, maxHealth;

    set target(Asteroid value) => _target = value;
    
    Ship(BitmapData bitmapData, this._maxSpeed):super(bitmapData) {
      var random = new Random();
      _speed = 0.0;
      pivotX = _halfWidth  = (bitmapData.width  * 0.5).toDouble();
      pivotY = _halfHeight = (bitmapData.height * 0.5).toDouble();
      bitmapData.colorTransform(bitmapData.rectangle, new ColorTransform(1.0, 1.0, 1.0, 1.0, random.nextInt(100), random.nextInt(100), random.nextInt(100)));
      _rotRate = random.nextDouble();
      maxHealth = health = (_halfWidth * _halfHeight).toInt();
      juggler.add(this);
    }

    bool advanceTime(num time) {
      if (_target != null && _target.health > 0) {
        var tx = x + _speed * cos(rotation) * time;
        var ty = y + _speed * sin(rotation) * time;
        
        if (tx < _halfWidth)
          tx = 640 - _halfWidth;
        else if (tx > 640 - _halfWidth)
          tx = _halfWidth;
        
        if (ty < _halfHeight)
          ty = 480 - _halfHeight;
        else if (ty > 480 - _halfHeight)
          ty = _halfHeight;
        
        x = tx;
        y = ty;
      } else {
        _target = findTarget();
      }
      
      return true;
    }

    void fire() {
      var proj = new Projectile(150.0);
      proj.x = x;
      proj.y = y;
      proj.target = _target;
      parent.addChild(proj);
    }
    
    void thrust() {
      _speed = min(_speed + 10.0, _maxSpeed);
    }
    
    Asteroid findTarget() {
      return (parent as Asteroids).asteroids[new Random().nextInt((parent as Asteroids).asteroids.length)];
    }
    
    /**
     * Destroys this asteroid and returns the minerals mined from it.
     */
    Minerals destroy() {
      Random random = new Random();
      removeFromParent();
      juggler.remove(this);
      return new Minerals(gold: random.nextInt(255), silver: random.nextInt(255), copper: random.nextInt(255));
    }
}

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
    juggler.add(this);
  }
  
  bool advanceTime(num time) {
    if (_target != null && _target.health > 0) {
      _angle = atan2(_target.y - y, _target.x - x);
      var dx = _target.x - x, dy = _target.y - y;
      if (dx * dx + dy * dy <= width * height) {
       (parent as Asteroids).minerals.add(_target.takeDamage(10));
       (parent as Asteroids).updateHUD();
        destroy();
      }
    }
    var tx = x + _speed * cos(_angle) * time;
    var ty = y + _speed * sin(_angle) * time;
    tx > 640 - _halfWidth || tx < _halfWidth ? destroy() : x = tx;
    ty > 480 - _halfHeight || ty < _halfHeight ? destroy() : y = ty;
    rotation = _angle;
  }

  Minerals destroy() {
    Random random = new Random();
    removeFromParent();
    juggler.remove(this);
    return new Minerals();
  }  
}