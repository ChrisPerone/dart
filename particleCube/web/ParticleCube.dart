import 'dart:html';
import 'dart:math' as Math;

CanvasElement canvas;

num _width;
num _height;

num renderTime;
num totalTime = 0;

num get width => _width;

num get height => _height;
final List<Particle> _particles = [];
final Math.Random random = new Math.Random(100);

void main() {
  canvas = query("#container");
  // Measure the canvas element.
    _width = (canvas.parent as Element).clientWidth;
    _height = (canvas.parent as Element).clientHeight;

    canvas.width = _width;
    Particle particle;
    Particle last;
    for (int i = 0; i < 10000; ++i) {
      Point pt = new Point(random.nextDouble() * width, random.nextDouble() * height);
      particle = new Particle(pt.x, pt.y, getRandomColor());
//      _particles.add(particle);
      if (last != null)
         last.next = particle;
      last = particle;
      if (Particle.start == null)
          Particle.start = particle;
    }

    final context = canvas.context2d;
    context.fillStyle = "#FFFFFF";
    context.setTransform(1, 0, 0, 1, 0, 0);

    requestRedraw();
}

String getRandomColor() {
  return '#${random.nextInt(255).toRadixString(16)}${random.nextInt(255).toRadixString(16)}${random.nextInt(255).toRadixString(16)}';
}

void draw(num _) {
//  num time = new Date.now().millisecondsSinceEpoch;

//  if (renderTime != null) {
//    showFps((1000 / (time - renderTime)).round());
//  }

  final context = canvas.context2d;

//  final ImageData imageData = context.getImageData(0, 0, 100, 100);
//  if (renderTime != null) {
//  totalTime += (time - renderTime);
//  for (int i = imageData.data.length - 1; i >= 4; i -= 4) {
//    int p = (Math.cos(time * 1000) * 10).toInt(); //imageData.data[i];
//    imageData.data[i] = 255;
//    imageData.data[i - 1] = 0;
//    imageData.data[i - 2] = Math.min(255, totalTime * 0.01).toInt();
//    imageData.data[i - 3] = 0;
//  }
//  context.putImageData(imageData, 0, 0, 0, 0, 100, 100);
    drawBackground(context);
//    _particles.forEach((particle) => particle.draw(context));
    Particle particle = Particle.start;
    do {
      particle.draw(context);
      particle = particle.next;
    } while (particle != null);
//  renderTime = time;
  requestRedraw();
}

void drawBackground(CanvasRenderingContext2D context) {
  context.save();
  context.transform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, width, height);
  context.restore();
}

void requestRedraw() {
  window.requestAnimationFrame(draw);
}

class Particle {
  static Particle start;
  Particle next;
  Point _pt;
  String _color;

  Particle(double x, double y, this._color) {
    _pt = new Point(x, y);
  }
  void draw(CanvasRenderingContext2D context) {
      context.fillStyle = _color;
      context.fillRect(_pt.x.toInt(), _pt.y.toInt(), 1, 1);
      _pt.x += Math.cos(_pt.y);
      _pt.y++;
      if (_pt.y >= height) {
        _pt.x = random.nextDouble() * width;
        _pt.y = 0.0;
      }
  }
}

double fpsAverage;

/**
 * Display the animation's FPS in a div.
 */
void showFps(num fps) {
  if (fpsAverage == null) {
    fpsAverage = fps;
  }

  fpsAverage = fps * 0.05 + fpsAverage * 0.95;

  query("#notes").text = "${fpsAverage.round().toInt()} fps";
}

class Point {
  double x, y;

  Point(this.x, this.y);
}