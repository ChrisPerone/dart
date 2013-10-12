import 'dart:html';
import 'dart:web_gl' as WebGL;
import 'dart:math' as Math;
import 'package:vector_math/vector_math.dart';

int PARTICLE_SIZE = 2;

CanvasElement canvas;
//CanvasElement sourceCanvas;
CanvasRenderingContext2D context;
CanvasElement buffer;
Element lifecycle;
TextInputElement numParticles;
int oldNumPArticles = 0;
int animFrameId;

num _width;
num _height;
double _lastTime = 0.0;
Vector3 _rotation = new Vector3(0.005, 0.005, 0.005);

final Vector3 _bounds = new Vector3(_width.toDouble(), _height.toDouble(), 100.0);
final Matrix4 matrix4 = new Matrix4.identity();

final List<Particle> _particles = [];
final Math.Random random = new Math.Random(100);

ImageData particleImage;

//=================
//Getters & Setters
num get width => _width;
num get height => _height;

String get getRandomColor {
  return '#${(random.nextInt(128) + 128).toRadixString(16)}${(random.nextInt(128) + 128).toRadixString(16)}${(random.nextInt(128) + 128).toRadixString(16)}';
}

//================
//Public Functions
void main() {
    canvas    = query("#container");
    lifecycle = query("#lifecycle");
    numParticles = query("#numParticles");
    numParticles.value = "10000";
    numParticles.onInput.listen(clickedSubmit);
    buffer = new CanvasElement(width: PARTICLE_SIZE, height: PARTICLE_SIZE);
    window.setImmediate(start);
}
void clickedSubmit(Event event) {
  window.cancelAnimationFrame(animFrameId);
  Particle particle = Particle.start;
  Particle last;
  int max = 0;
  if (numParticles.value != "")
    max = int.parse(numParticles.value);
  int i = 0;
  //Goto the last particle
  while (particle.next != null) { particle = particle.next; }
  //Iterate backwards
  while (particle.last != null && i < max) {
    if (particle.next != null)
      particle.next = null;
    if (last != null)
      last.last = null;
    last = particle;
    particle = particle.last;
    ++i;
  }
  if (max <= 0)
    Particle.start = null;
  start();
}
void start() {
    context       = canvas.context2D;
    Rect rect     = canvas.parent.client;
    _width        = rect.width;
    _height       = rect.height;
    canvas.width  = _width;
    canvas.height = _height;

//    TextInputElement numParticles = new TextInputElement();
//    numParticles.value = "0";
//    document.nodes.add(numParticles);

    particleImage = context.createImageData(1, 1);
    int dataLength = particleImage.data.length - 1;
    for (int i = 0; i < dataLength; i += 4) {
        particleImage.data[i] = random.nextInt(255);
        particleImage.data[i + 1] = random.nextInt(255);
        particleImage.data[i + 2] = random.nextInt(255);
        particleImage.data[i + 3] = 255;
    }

//    sourceCanvas = new CanvasElement();
//    sourceCanvas.context2D.putImageData(particleImage, 0, 0);
    WebGL.RenderingContext context3d = canvas.getContext3d();
//    WebGL.RenderingContext context3d = canvas.getContext("experimental-webgl");
//    print("$context3d");
//    if (context3d == null)
//      return;
    //Measure the canvas element.
//    _width = (canvas.parent as Element).clientWidth;
//    _height = (canvas.parent as Element).clientHeight;

    int max = 0;
    Particle particle;
    Particle last;
    //Go to the last particle to connect the next particles to
    if (Particle.start != null) {
      particle = Particle.start;
      while (particle.next != null) particle = particle.next;
      last = particle;
    }
    if (numParticles.value != "")
      max = int.parse(numParticles.value);
    String randColor = getRandomColor;
    for (int i = 0; i < max; ++i) {
      particle = new Particle(random.nextDouble() * _bounds.x, random.nextDouble() * _bounds.y, random.nextDouble() * _bounds.z, randColor);
      if (last != null) {
        particle.last = last;
        last.next     = particle;
      }
      last = particle;
      if (Particle.start == null)
          Particle.start = particle;
    }

    animFrameId = window.requestAnimationFrame(render);
    window.onClick.listen(onClick);
}

void setPixel(ImageData data, int x, int y, int r, int g, int b, int a) {
    int index = (x + y * data.width) * 4;
    data.data[index] = r;
    data.data[index+1] = g;
    data.data[index+2] = b;
    data.data[index+3] = a;
}

void onClick(MouseEvent mouseEvent) {
  print("onClick $mouseEvent");
}

void render(num timeStamp) {
    double deltaTime = timeStamp - _lastTime;
    _lastTime = timeStamp;
    lifecycle.text = "Life cycle: ${timeStamp.floorToDouble()}";
    lifecycle.text = lifecycle.text.substring(0, lifecycle.text.length - 2);

    context.clearRect(0, 0, width, height);

    matrix4.setIdentity();
    matrix4.translate(_bounds.x * 0.5, _bounds.y * 0.5, _bounds.z * 0.5);
    matrix4.rotateX(_rotation.x);
    matrix4.rotateY(_rotation.y);
    matrix4.rotateZ(_rotation.z);
    matrix4.translate(-_bounds.x * 0.5, -_bounds.y * 0.5, -_bounds.z * 0.5);

    Particle particle = Particle.start;
    while (particle != null) {
      particle.render(deltaTime);
      particle = particle.next;
    }

    animFrameId = window.requestAnimationFrame(render);
}

void drawBackground() {
//  context.save();
//  context.transform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, width, height);
//  context.restore();
}

class Particle {
  static Particle start;
  Particle parent;
  Particle last;
  Particle next;
  Vector3 _pt;
  Vector2 _screenPt;
  double _angle;
  String _color;

  Vector3 get pt => _pt;
  Vector2 get screenPt => _screenPt;
  Particle(double x, double y, double z, this._color) {
    _pt       = new Vector3(x, y, z);
    _screenPt = new Vector2(0.0, 0.0);
    _angle    = random.nextDouble() * Math.PI * 2;
    get2DLoc(_pt, _screenPt);
//    buffer.context2D.fillStyle = _color;
//    buffer.context2D.fillRect(0, 0, PARTICLE_SIZE, PARTICLE_SIZE);
//    buffer.context2D.save();
//    print("${particleImage.width} ${particleImage.height}");
  }
  /**
   * Draws the particle to the screen.
   */
  void render(num deltaTime) {
      bool blocked = false;

      if (_pt.x < 0 || _pt.x > _bounds.x) {
        _pt.x = Math.max(0, Math.min(_bounds.x, _pt.x)).toDouble();
        blocked = true;
      }
      if (_pt.y < 0 || _pt.y > _bounds.y) {
        _pt.y = Math.max(0, Math.min(_bounds.y, _pt.y)).toDouble();
        blocked = true;
      }
      if (blocked)
        _angle += Math.PI;

      get2DLoc(_pt, _screenPt);
//      context.drawImage(sourceCanvas, _screenPt.x, _screenPt.y);
//      context.putImageData(particleImage, _screenPt.x, _screenPt.y);
      context.fillStyle = _color;
      context.fillRect(_screenPt.x.toInt(), _screenPt.y.toInt(), PARTICLE_SIZE, PARTICLE_SIZE);
//      buffer.context2D.restore();
//      context.drawImage(buffer, _screenPt.x, _screenPt.y);

      _pt.x += Math.cos(_angle);
      _pt.y += Math.sin(_angle);
  }
  /**
   * Converts a 3 dimensional [pt] to a 2 dimensional [result].
   */
  static void get2DLoc(Vector3 pt, Vector2 result) {
    Vector3 v = matrix4.transform3(pt);
    v.applyProjection(matrix4);
    result.x = v.x + (_width - _bounds.x) * 0.5;
    result.y = v.y + (_height - _bounds.y) * 0.5;
  }
}