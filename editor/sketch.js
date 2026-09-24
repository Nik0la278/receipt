// RECEIPT!
// This is the file to edit. p5.js reference: https://p5js.org/reference/
import JsBarcode from "jsbarcode";

export const receipt = {
  height: 1080, // 240–2000 px. Width is fixed by the printer.
  seed: 67,
};

// everything here is editable. play around or rm -rf and see what you come up with!
export function drawReceipt(p) {
  const { width: w, height: h } = p;
  const margin = 24;

  // Header
  p.noStroke();
  p.fill(0);
    p.textFont("monospace");
    p.textAlign(p.CENTER, p.TOP);
    p.textStyle(p.BOLD);
    p.textSize(28);
    p.text("Nik0la278", w / 2, 30);

  dashedLine(p, margin, 94, w - margin, 94, 6, 5);

  // ============================================
  // YOUR PATTERN, REPEATED 3 TIMES
  // copy < 3      = how many times it repeats
  // copy * 250    = how far down each copy moves (bigger = more space between)
  // - 250         = shifts the first copy up so all 3 fit on the receipt
  // ============================================
  for (let copy = 0; copy < 3; copy += 1) {
    p.push();
    p.translate(0, copy * 250 - 250);

  p.stroke(0);
p.strokeWeight(3);          // thickness
p.line(50, 400, 300, 450);  // start x, start y, end x, end y

p.stroke(0);
p.strokeWeight(3);          // thickness
p.line(50, 400, 300, 450);  // start x, start y, end x, end y

p.stroke(0);
p.strokeWeight(3);          // thickness
p.line(50, 400, 300, 450);  // start x, start y, end x, end y

p.stroke(0);
p.strokeWeight(3);          // thickness
p.line(50, 400, 300, 450);  // start x, start y, end x, end y

p.stroke(0);
p.strokeWeight(3);          // thickness
p.line(50, 400, 300, 450);  // start x, start y, end x, end y

p.stroke(0);
p.strokeWeight(3);          // thickness
p.line(50, 400, 300, 450);  // start x, start y, end x, end y

  p.noStroke();
p.fill(0);
for (let i = 0; i < 100; i += 1) {   // 100 = how many dots
  // y goes from 400 to 500, dot size from 1 to 4
  p.circle(p.random(margin, w - margin), p.random(400, 500), p.random(1, 4));
}

p.noStroke();
p.fill(0);
for (let i = 0; i < 100; i += 1) {   // 100 = how many dots
  // y goes from 400 to 500, dot size from 1 to 4
  p.circle(p.random(margin, w - margin), p.random(400, 500), p.random(1, 4));
}

p.noStroke();
p.fill(0);
for (let i = 0; i < 100; i += 1) {   // 100 = how many dots
  // y goes from 400 to 500, dot size from 1 to 4
  p.circle(p.random(margin, w - margin), p.random(400, 500), p.random(1, 4));
}

p.stroke(0);
p.strokeWeight(3);          // thickness
p.line(50, 400, 300, 450);  // start x, start y, end x, end y

  p.noFill();
p.stroke(0);
p.strokeWeight(3);          // thickness
p.beginShape();
for (let x = margin; x <= w - margin; x += 4) {
  // 400 = height on receipt, 60 = how tall the waves are,
  // 0.02 = how wiggly (smaller = smoother), 5 = pattern number (try 6, 7...)
  const y = 400 + p.noise(x * 0.02, 5) * 60;
  p.vertex(x, y);
}
p.endShape();

p.noFill();
p.stroke(0);
p.strokeWeight(3);          // thickness
p.beginShape();
for (let x = margin; x <= w - margin; x += 4) {
  // 400 = height on receipt, 60 = how tall the waves are,
  // 0.02 = how wiggly (smaller = smoother), 5 = pattern number (try 6, 7...)
  const y = 400 + p.noise(x * 0.02, 5) * 60;
  p.vertex(x, y);
}
p.endShape();

p.noFill();
p.stroke(0);
p.strokeWeight(3);          // thickness
p.beginShape();
for (let x = margin; x <= w - margin; x += 4) {
  // 400 = height on receipt, 60 = how tall the waves are,
  // 0.02 = how wiggly (smaller = smoother), 5 = pattern number (try 6, 7...)
  const y = 400 + p.noise(x * 0.02, 5) * 60;
  p.vertex(x, y);
}
p.endShape();

p.noFill();
p.stroke(0);
p.strokeWeight(3);          // thickness
p.beginShape();
for (let x = margin; x <= w - margin; x += 4) {
  // 400 = height on receipt, 60 = how tall the waves are,
  // 0.02 = how wiggly (smaller = smoother), 5 = pattern number (try 6, 7...)
  const y = 400 + p.noise(x * 0.02, 5) * 60;
  p.vertex(x, y);
}
p.endShape();

p.noFill();
p.stroke(0);
p.strokeWeight(3);          // thickness
p.beginShape();
for (let x = margin; x <= w - margin; x += 4) {
  // 400 = height on receipt, 60 = how tall the waves are,
  // 0.02 = how wiggly (smaller = smoother), 5 = pattern number (try 6, 7...)
  const y = 400 + p.noise(x * 0.02, 5) * 60;
  p.vertex(x, y);
}
p.endShape();

p.noFill();
p.stroke(0);
p.strokeWeight(3);          // thickness
p.beginShape();
for (let x = margin; x <= w - margin; x += 4) {
  // 400 = height on receipt, 60 = how tall the waves are,
  // 0.02 = how wiggly (smaller = smoother), 5 = pattern number (try 6, 7...)
  const y = 400 + p.noise(x * 0.02, 5) * 60;
  p.vertex(x, y);
}
p.endShape();

  p.stroke(0);
p.strokeWeight(2);
for (let x = margin; x < w - margin; x += 10) {   // 10 = gap between lines
  p.line(x, 400, x, 450);                         // top y, bottom y
}

p.stroke(0);
p.strokeWeight(2);
for (let x = margin; x < w - margin; x += 10) {   // 10 = gap between lines
  p.line(x, 400, x, 450);                         // top y, bottom y
}

p.stroke(0);
p.strokeWeight(2);
for (let x = margin; x < w - margin; x += 10) {   // 10 = gap between lines
  p.line(x, 400, x, 450);                         // top y, bottom y
}

p.noFill();
p.stroke(0);
p.strokeWeight(3);          // thickness
p.beginShape();
for (let x = margin; x <= w - margin; x += 4) {
  // 400 = height on receipt, 60 = how tall the waves are,
  // 0.02 = how wiggly (smaller = smoother), 5 = pattern number (try 6, 7...)
  const y = 400 + p.noise(x * 0.02, 5) * 60;
  p.vertex(x, y);
}
p.endShape();

p.noFill();
p.stroke(0);
p.strokeWeight(3);          // thickness
p.beginShape();
for (let x = margin; x <= w - margin; x += 4) {
  // 400 = height on receipt, 60 = how tall the waves are,
  // 0.02 = how wiggly (smaller = smoother), 5 = pattern number (try 6, 7...)
  const y = 400 + p.noise(x * 0.02, 5) * 60;
  p.vertex(x, y);
}
p.endShape();

  p.noStroke();
p.fill(0);
for (let i = 0; i < 100; i += 1) {   // 100 = how many dots
  // y goes from 400 to 500, dot size from 1 to 4
  p.circle(p.random(margin, w - margin), p.random(400, 500), p.random(1, 4));
}

p.noStroke();
p.fill(0);
for (let i = 0; i < 100; i += 1) {   // 100 = how many dots
  // y goes from 400 to 500, dot size from 1 to 4
  p.circle(p.random(margin, w - margin), p.random(400, 500), p.random(1, 4));
}

    p.pop();
  }
  // ============================================
  // END OF REPEATED PATTERN
  // ============================================

}


function drawBarcode(p, value, centerX, y) {
  const barcodeCanvas = document.createElement("canvas");
  JsBarcode(barcodeCanvas, value, {
    format: "CODE128",
    width: 1,
    height: 52,
    displayValue: false,
    margin: 0,
    background: "#ffffff",
    lineColor: "#000000",
  });
  // Draw directly on p5's canvas: p.image expects a p5 image wrapper, while
  // JsBarcode returns a regular browser canvas.
  p.drawingContext.drawImage(barcodeCanvas, Math.floor(centerX - barcodeCanvas.width / 2), y);
}

function dashedLine(p, x1, y1, x2, y2, dash, gap) {
  p.stroke(0);
  p.strokeWeight(2);
  for (let x = x1; x < x2; x += dash + gap) {
    p.line(x, y1, Math.min(x + dash, x2), y2);
  }
}
