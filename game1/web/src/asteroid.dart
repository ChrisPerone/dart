part of game1_web;

class Asteroid extends Bitmap implements Animatable {

    double _vx, _vy, _rotRate, _halfWidth, _halfHeight;
    int health, maxHealth;

    Asteroid(BitmapData bitmapData, this._vx, this._vy):super(bitmapData) {
      var random = new Random();
      pivotX = _halfWidth  = (bitmapData.width  * 0.5).toDouble();
      pivotY = _halfHeight = (bitmapData.height * 0.5).toDouble();
      bitmapData.colorTransform(bitmapData.rectangle, new ColorTransform(1.0, 1.0, 1.0, 1.0, random.nextInt(100), random.nextInt(100), random.nextInt(100)));
      _rotRate = random.nextDouble();
      maxHealth = health = (_halfWidth * _halfHeight * 0.5).toInt();
      juggler.add(this);
    }

    bool advanceTime(num time) {
      var tx = x + _vx * time;
      var ty = y + _vy * time;

      if (tx < 0)
        tx = stage.stageWidth;
      else if (tx > stage.stageWidth)
        tx = 0;

      if (ty < 0)
        ty = stage.stageHeight;
      else if (ty > stage.stageHeight)
        ty = 0;

      x = tx;
      y = ty;
      rotation += _rotRate * time;

      if ((parent as Asteroids).ships.length > 0) {
        var ship = (parent as Asteroids).ships[0] as Ship;
        var dx = ship.x - x;
        var dy = ship.y - y;
        if (dx * dx + dy * dy < ship.width * ship.height) {
          ship.takeDamage(_halfWidth.toInt());
          destroy();
        }
      }

      return true;
    }

    Minerals takeDamage(int damage, double force, [Object instigator]) {
      var sound = resourceManager.getSound("impact1");
      var soundTransform = new SoundTransform(0.5);
      var soundChannel = sound.play(false, soundTransform);

      health -= damage;
      (parent as Asteroids).drawHealthBar(health / maxHealth, x - _halfWidth, y - _halfHeight);
      if (health <= 0) {
        return destroy();
      }
      return new Minerals();
    }

    void split() {
      var random    = new Random();
      var bmd       = new BitmapData(_halfWidth.toInt(), bitmapData.height);
      bmd.copyPixels(bitmapData, new Rectangle(0, 0, bmd.width, bmd.height), new Point(0,0));
      var asteroid  = new Asteroid(bmd, random.nextDouble() * 200 - 100, random.nextDouble() * 200 - 100);
      asteroid.x    = x - _halfWidth;
      asteroid.y    = y;
      (parent as Asteroids).asteroids.add(asteroid);
      parent.addChild(asteroid);

      bmd           = new BitmapData(_halfWidth.toInt(), bitmapData.height);
      bmd.copyPixels(bitmapData, new Rectangle(_halfWidth, 0, bmd.width, bmd.height), new Point(0,0));
      asteroid      = new Asteroid(bmd, random.nextDouble() * 200 - 100, random.nextDouble() * 200 - 100);
      asteroid.x    = x + _halfWidth;
      asteroid.y    = y;
      (parent as Asteroids).asteroids.add(asteroid);
      parent.addChild(asteroid);
    }
    /**
     * Destroys this asteroid and returns the minerals mined from it.
     */
    Minerals destroy() {
      var random      = new Random();
      if (_halfWidth > 8)
        split();

      (parent as Asteroids).asteroids.remove(this);
      removeFromParent();
      juggler.remove(this);
      var sound = resourceManager.getSound("explosion2");
      var soundTransform = new SoundTransform(0.8);
      var soundChannel = sound.play(false, soundTransform);

      return new Minerals(gold: _halfWidth.toInt(), silver: _halfWidth.toInt(), copper: _halfWidth.toInt());
    }
}

class Minerals {
  int gold, silver, copper;

  Minerals({this.gold: 0, this.silver: 0, this.copper: 0}) { }

  void add(Minerals minerals) {
    gold    += minerals.gold;
    silver  += minerals.silver;
    copper  += minerals.copper;
  }

  String toString() {
    return 'Score: ${gold + silver + copper}';
//    return 'Gold: $gold Silver: $silver Copper: $copper';
  }
}