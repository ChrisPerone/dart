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
      maxHealth = health = (_halfWidth * _halfHeight).toInt();
      juggler.add(this);
    }

    bool advanceTime(num time) {
      var tx = x + _vx * time;
      var ty = y + _vy * time;

      if (tx < 0)
        tx = html.querySelector('#stage').clientWidth;
      else if (tx > html.querySelector('#stage').clientWidth)
        tx = 0;

      if (ty < 0)
        ty = html.querySelector('#stage').clientHeight;
      else if (ty > html.querySelector('#stage').clientHeight)
        ty = 0;

      x = tx;
      y = ty;
      rotation += _rotRate * time;

      return true;
    }

    Minerals takeDamage(int damage) {
      health -= damage;
      (parent as Asteroids).drawHealthBar(health / maxHealth, x - _halfWidth, y - _halfHeight);
      if (health <= 0) {
        return destroy();
      }
      return new Minerals();
    }
    /**
     * Destroys this asteroid and returns the minerals mined from it.
     */
    Minerals destroy() {
      Random random = new Random();
      (parent as Asteroids).asteroids.remove(this);
      removeFromParent();
      juggler.remove(this);
      return new Minerals(gold: random.nextInt(255), silver: random.nextInt(255), copper: random.nextInt(255));
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
    return 'Gold: $gold Silver: $silver Copper: $copper';
  }
}