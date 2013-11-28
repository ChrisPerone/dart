library stagexl_web;

import 'dart:math';
import 'dart:html' as html;
import 'package:stagexl/stagexl.dart';

part 'src/asteroids.dart';
part 'src/asteroid.dart';

Stage stage;
RenderLoop renderLoop;
Juggler juggler;
ResourceManager resourceManager;

void main() {

  // initialize Stage and RenderLoop
  stage = new Stage('stage', html.query('#stage'));
  renderLoop = new RenderLoop();
  renderLoop.addStage(stage);
  juggler = renderLoop.juggler;

  // initialize ResourceManager
  resourceManager = new ResourceManager()
    ..addTextureAtlas('asteroids', 'assets/asteroids.json', TextureAtlasFormat.JSONARRAY);

  resourceManager.load()
    .then((_) => stage.addChild(new Asteroids()))
    .catchError((e) => print(e));
}