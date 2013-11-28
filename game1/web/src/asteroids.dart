part of stagexl_web;

class Asteroids extends DisplayObjectContainer {

  List asteroids = new List<Asteroid>();
  List asteroidsToRemove = new List<Asteroid>();
  Minerals _minerals;
  Shape _healthBar;
  num _fpsAverage = null;
  
  Asteroids() {
    addAsteroids(100);
    _minerals = new Minerals();
    updateHUD();

    _healthBar = new Shape();
    addChild(_healthBar);
    
    stage.onMouseMove.listen(onClicked);
    
    // add html-button event listeners
//    html.query('#minus100').onClick.listen((e) => _removeFlags(100));
//    html.query('#plus100').onClick.listen((e) => _addFlags(100));

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

  void updateHUD() { html.query('#minerals').innerHtml = _minerals.toString(); }
  
  void addAsteroids(int amount) {

    var random        = new Random();
    var textureAtlas  = resourceManager.getTextureAtlas('asteroids');
    var frameNames    = textureAtlas.frameNames;

    while(--amount >= 0) {
      var frameName   = frameNames[random.nextInt(frameNames.length)];
      var bitmapData  = textureAtlas.getBitmapData(frameName);

      var asteroid    = new Asteroid(bitmapData, random.nextDouble() * 200 - 100, random.nextDouble() * 200 - 100);
      asteroid.x      = 30 + random.nextInt(html.query('#stage').clientWidth - 60);
      asteroid.y      = 30 + random.nextInt(html.query('#stage').clientHeight - 60);
      asteroids.add(asteroid);
      addChild(asteroid);
      juggler.add(asteroid);
    }
  }

  //---------------------------------------------------------------------------------
  
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
    _healthBar.graphics.beginPath();
    _healthBar.graphics.rect(0, 0, 50, 8);
    _healthBar.graphics.closePath();
    _healthBar.graphics.strokeColor(0xFF000000);
    _healthBar.graphics.beginPath();
    _healthBar.graphics.rect(1, 1, fillPercent * 48, 6);
    _healthBar.graphics.closePath();
    _healthBar.graphics.fillColor(0xFFFF0000);
    _healthBar.x = barX;
    _healthBar.y = barY;
  }
}