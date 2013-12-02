library game1_web;

import 'dart:math' hide Rectangle hide Point;
import 'dart:html' as html;
import 'package:stagexl/stagexl.dart';

part 'src/Asteroids.dart';
part 'src/Asteroid.dart';
part 'src/Ship.dart';
part 'src/Projectile.dart';

Stage stage;
RenderLoop renderLoop;
Juggler juggler;
ResourceManager resourceManager;

void main() {

  // initialize Stage and RenderLoop
  stage = new Stage('stage', html.querySelector('#stage'));
  renderLoop = new RenderLoop();
  renderLoop.addStage(stage);
  juggler = renderLoop.juggler;

  var loadingText = new TextField();
  loadingText.defaultTextFormat = new TextFormat('Electrolize', 30, Color.White);
  loadingText.text = "Loading...";
  loadingText.autoSize = TextFieldAutoSize.LEFT;
  loadingText.x = stage.stageWidth * 0.5 - loadingText.textHeight;
  loadingText.y = stage.stageHeight * 0.5;
  stage.addChild(loadingText);

  // initialize ResourceManager
  resourceManager = new ResourceManager()
    ..addTextureAtlas('asteroids', 'assets/asteroids.json', TextureAtlasFormat.JSONARRAY)
    ..addSound("shot1", "assets/sounds/shot1.mp3")
    ..addSound("explosion1", "assets/sounds/explosion1.mp3")
    ..addSound("explosion2", "assets/sounds/explosion2.mp3")
    ..addSound("impact1", "assets/sounds/impact2.ogg");

  resourceManager.load()
    .then((_) => stage.addChild(new Asteroids()))
    .catchError((e) => print(e));
}