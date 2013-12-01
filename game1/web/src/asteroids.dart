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
    addChild(new Bitmap(resourceManager.getBitmapData('background')));
    addAsteroids(50);
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

  void addAsteroids(int amount) {

    var random        = new Random();
    var textureAtlas  = resourceManager.getTextureAtlas('asteroids');
    var frameNames    = textureAtlas.frameNames;

    while(--amount >= 0) {
      var frameName   = frameNames[random.nextInt(3)];
      var bitmapData  = textureAtlas.getBitmapData(frameName);

      var asteroid    = new Asteroid(bitmapData, random.nextDouble() * 200 - 100, random.nextDouble() * 200 - 100);
      asteroid.x      = 30 + random.nextInt(html.querySelector('#stage').clientWidth - 60);
      asteroid.y      = 30 + random.nextInt(html.querySelector('#stage').clientHeight - 60);
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
      instance.x      = 30 + random.nextInt(html.querySelector('#stage').clientWidth - 60);
      instance.y      = 30 + random.nextInt(html.querySelector('#stage').clientHeight - 60);
      ships.add(instance);
      addChild(instance);
    }
  }
  //---------------------------------------------------------------------------------

  void keyDownListener(e) {
    var keyCode = e.keyCode;

    print('$keyCode');
    pressedKeys.add(keyCode);
  }

  void keyUpListener(e) {

    for (var keyCode in pressedKeys) {
      switch (keyCode) {
        case 32: ships[0].fire(); break;
        case 37: ships[0].rotation -= 0.1; break;
        case 38: ships[0].thrust(); break;
        case 39: ships[0].rotation += 0.1; break;
      }
    }
    pressedKeys.clear();
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