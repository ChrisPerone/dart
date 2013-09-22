import 'dart:html';
import 'dart:math' as Math;
import 'package:vector_math/vector_math.dart';

int PARTICLE_SIZE = 2;

CanvasElement canvas;
CanvasRenderingContext2D context;

num _width;
num _height;
double _rotation = 0.0;

final Vector3 _bounds = new Vector3(_width * 0.5, _height * 0.5, 100.0);
final Matrix4 matrix4 = new Matrix4.identity();

final List<Particle> _particles = [];
final Math.Random random = new Math.Random(100);

//=================
//Getters & Setters
num get width => _width;
num get height => _height;

String get getRandomColor {
  return '#${random.nextInt(255).toRadixString(16)}${random.nextInt(255).toRadixString(16)}${random.nextInt(255).toRadixString(16)}';
}

//================
//Public Functions
void main() {
    canvas = query("#container");
    context = canvas.context2D;
    //Measure the canvas element.
    _width = (canvas.parent as Element).clientWidth;
    _height = (canvas.parent as Element).clientHeight;

    canvas.width = _width;

    Particle particle;
    Particle last;
    for (int i = 0; i < 5000; ++i) {
      particle = new Particle(random.nextDouble() * _bounds.x, random.nextDouble() * _bounds.y, random.nextDouble() * _bounds.z, getRandomColor);
      if (last != null)
         last.next = particle;
      last = particle;
      if (Particle.start == null)
          Particle.start = particle;
    }

    context.fillStyle = "#FFFFFF";
    context.setTransform(1, 0, 0, 1, 0, 0);

    window.requestAnimationFrame(draw);
}

void draw(num _) {
    drawBackground();

    matrix4.setIdentity();
    matrix4.translate(_bounds.x * 0.5, _bounds.y * 0.5, _bounds.z * 0.5);
    matrix4.rotateX(_rotation);
    matrix4.rotateY(_rotation);
    matrix4.rotateZ(_rotation);
    matrix4.translate(-_bounds.x * 0.5, -_bounds.y * 0.5, -_bounds.z * 0.5);
    _rotation = 0.005;

    Particle particle = Particle.start;
    while (particle != null) {
      particle.draw();
      particle = particle.next;
    }

    window.requestAnimationFrame(draw);
}

void drawBackground() {
  context.save();
  context.transform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, width, height);
  context.restore();
}

class Particle {
  static Particle start;
  static final Vector2 _screenPt = new Vector2(0.0, 0.0);
  Particle next;
  Vector3 _pt;
  String _color;

  Particle(double x, double y, double z, this._color) {
    _pt = new Vector3(x, y, z);
  }
  /**
   * Draws the particle to the screen.
   */
  void draw() {
      get2DLoc(_pt, _screenPt);
      context.fillStyle = _color;
      context.fillRect(_screenPt.x.toInt(), _screenPt.y.toInt(), PARTICLE_SIZE, PARTICLE_SIZE);
//      _pt.x += Math.cos(_pt.y);
//      _pt.y++;
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