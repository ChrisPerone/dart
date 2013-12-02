part of game1_web;

class Asteroids extends DisplayObjectContainer {

  List asteroids = new List<Asteroid>();
  List asteroidsToRemove = new List<Asteroid>();
  List ships = new List<Ship>();
  List pressedKeys = new List<int>();
  Minerals _minerals;
  Shape _healthBar;
  num _fpsAverage = null;

  Minerals get minerals => _minerals;

  Asteroids() {
    stage.removeChildren(0, stage.numChildren - 1);
    addBackground();
    addAsteroids(30);
    addShips(1);
    _minerals = new Minerals();
    updateHUD();

    _healthBar = new Shape();
    addChild(_healthBar);

//    stage.onMouseMove.listen(onClicked);
    html.querySelector('#stage').onKeyDown.listen(keyDownListener);
    html.querySelector('#stage').onKeyUp.listen(keyUpListener);

    // add event listener for EnterFrame (fps meter)
//    onEnterFrame.listen(_onEnterFrame);
  }

  //---------------------------------------------------------------------------------

  _onEnterFrame(EnterFrameEvent e) {
//    if (_fpsAverage == null) {
//      _fpsAverage = 1.00 / e.passedTime;
//    } else {
//      _fpsAverage = 0.05 / e.passedTime + 0.95 * _fpsAverage;
//    }

//    html.query('#fpsMeter').innerHtml = 'fps: ${_fpsAverage.round()}';
  }

  //---------------------------------------------------------------------------------

  void updateHUD() { html.querySelector('#minerals').innerHtml = _minerals.toString(); }

  void addBackground() {
    var random = new Random();
    var bmd = new BitmapData(stage.stageWidth, stage.stageHeight, false, 0xFF000000);
    var max = stage.stageWidth;
    for (var i = 0; i < max; ++i) {
      var rect = new Rectangle(random.nextInt(bmd.width), random.nextInt(bmd.height), random.nextInt(3), random.nextInt(3));
      var color = random.nextInt(255) << 24 | random.nextInt(255) << 16 | random.nextInt(255) << 8 | random.nextInt(255);
      bmd.fillRect(rect, color);
    }
    addChild(new Bitmap(bmd));
  }

  void addAsteroids(int amount) {

    var random        = new Random();
    var textureAtlas  = resourceManager.getTextureAtlas('asteroids');
    var frameNames    = textureAtlas.frameNames;

    while(--amount >= 0) {
      var frameName   = frameNames[random.nextInt(3)];
      var bitmapData  = textureAtlas.getBitmapData(frameName);

      var asteroid    = new Asteroid(bitmapData, random.nextDouble() * 200 - 100, random.nextDouble() * 200 - 100);
      var angle = random.nextDouble() * PI * 2;
      asteroid.x      = stage.stageWidth * 0.5 + cos(angle) * (50 + random.nextInt(stage.stageWidth));
      asteroid.y      = stage.stageHeight * 0.5 + sin(angle) * (50 + random.nextInt(stage.stageHeight));
      asteroids.add(asteroid);
      addChild(asteroid);
    }
  }

  void addShips(int amount) {

    var random        = new Random();
    var textureAtlas  = resourceManager.getTextureAtlas('asteroids');
    var frameNames    = textureAtlas.frameNames;

    while(--amount >= 0) {
      var bitmapData  = textureAtlas.getBitmapData(frameNames[4]);

      var instance    = new Ship(bitmapData, 200.0);
      instance.x      = html.querySelector('#stage').clientWidth * 0.5;
      instance.y      = html.querySelector('#stage').clientHeight * 0.5;
      ships.add(instance);
      addChild(instance);
    }
  }
  //---------------------------------------------------------------------------------

  void keyDownListener(e) {
    var keyCode = e.keyCode;

    if (!pressedKeys.contains(keyCode))
      pressedKeys.add(keyCode);
  }

  void keyUpListener(e) {
    var keyCode = e.keyCode;

    while (pressedKeys.remove(keyCode));
  }

  void onClicked(MouseEvent e) {
//    asteroids.forEach((asteroid) => checkDist(asteroid, e.stageX, e.stageY));
    num dx, dy;
    for (var asteroid in asteroids) {
      dx = mouseX - asteroid.x;
      dy = mouseY - asteroid.y;
      if (dx * dx + dy * dy < asteroid.width * asteroid.height) {
        asteroid.health -= 10;
        if (asteroid.health <= 0) {
          _minerals.add(asteroid.destroy());
          asteroidsToRemove.add(asteroid);
          updateHUD();
          drawHealthBar(0.0, asteroid.x - asteroid.width * 0.5, asteroid.y - asteroid.height * 0.5);
        } else {
          drawHealthBar(asteroid.health / asteroid.maxHealth, asteroid.x - asteroid.width * 0.5, asteroid.y - asteroid.height * 0.5);
        }
      }
    }
    asteroidsToRemove.forEach(asteroids.remove);
  }

//  void checkDist(Asteroid asteroid, num targetX, num targetY) {
//    num dx, dy;
//
//    dx = targetX - asteroid.x;
//    dy = targetY - asteroid.y;
//    if (dx * dx + dy * dy < asteroid.width * asteroid.height) {
//      asteroid.health -= 10;
//      if (asteroid.health <= 0) {
//        _minerals.add(asteroid.destroy());
//        asteroidsToRemove.add(asteroid);
//        updateHUD();
//        drawHealthBar(0.0, asteroid.x - asteroid.width * 0.5, asteroid.y - asteroid.height * 0.5);
//      } else {
//        drawHealthBar(asteroid.health / asteroid.maxHealth, asteroid.x - asteroid.width * 0.5, asteroid.y - asteroid.height * 0.5);
//      }
//    }
//  }

  void drawHealthBar(double fillPercent, num barX, num barY) {
    _healthBar.graphics.clear();
    if (fillPercent > 0.0) {
      _healthBar.graphics.beginPath();
      _healthBar.graphics.rect(0, 0, 50, 8);
      _healthBar.graphics.closePath();
      _healthBar.graphics.strokeColor(0xFFFFFFFF);
      _healthBar.graphics.beginPath();
      _healthBar.graphics.rect(1, 1, max(0, fillPercent) * 48, 6);
      _healthBar.graphics.closePath();
      _healthBar.graphics.fillColor(0xFFFF0000);
      _healthBar.x = barX;
      _healthBar.y = barY;
    }
  }
}