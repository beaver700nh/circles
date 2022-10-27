window.onload = function () {
  console.log(window.location);

  const w = Math.floor((window.innerWidth  - 4 + 2) / 12);
  const h = Math.floor((window.innerHeight - 4 + 2) / 11);

  const container = document.getElementsByClassName("container")[0];

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  for (let y = 0; y < h; ++y) {
    let row = makeRow();
    let _w = (y % 2 == 0 ? w - 1 : w);

    for (let x = 0; x < _w; ++x) {
      let circle = makeCircle();
      row.append(circle);
    }

    container.append(row);
  }
}

function makeCircle() {
  let circle = document.createElement("span");
  circle.dataset.fading = 0;
  circle.setAttribute("class", "circle");
  circle.setAttribute("onmouseover", "yeet(this);");
  return circle;
}

function makeRow() {
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  return row;
}

function yeet(elem) {
  elem.style.backgroundColor = "rgb(255, 255, 255)";

  const temp = elem.dataset.fading;
  elem.dataset.fading = 1;

  if (temp === "0") {
    fade(elem);
  }
}

function fade(elem) {
  let bg = elem.style.backgroundColor;
  let brightness = /rgb\(([0-9]+)\,/.exec(bg)[1];
  brightness -= 10;
  elem.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;

  if (brightness > 0) {
    window.setTimeout(fade, 50, elem);
  }
  else {
    elem.dataset.fading = 0;
  }
}
