let colorPicker = document.getElementById('colorPicker');
let erase = document.getElementById("eraser");
let paint = document.getElementById("paint");
let clear = document.getElementById("clear");
let changerSize = document.getElementById("changerSize");
let canvas = document.getElementById('canvas');

// Add a variable to keep track of the current color
let currentColor = 'black';

function createGrid(size) {
  canvas.innerHTML = '';
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let newGrid = document.createElement("div");
    newGrid.className = "grid";
    newGrid.addEventListener("mouseover", function () {
      newGrid.style.backgroundColor = currentColor;
    });
    canvas.appendChild(newGrid);
  }
}

// Initialize the grid with a default size
createGrid(16);

changerSize.addEventListener("input", function () {
  let size = changerSize.value;
  createGrid(size);
});

colorPicker.addEventListener("input", function () {
  currentColor = colorPicker.value;
});

erase.addEventListener("click", function () {
  currentColor = 'white';
});

paint.addEventListener("click", function () {
  currentColor = 'black';
});

clear.addEventListener("click", function () {
  canvas.querySelectorAll(".grid").forEach(gridCell => {
    gridCell.style.backgroundColor = 'white';
  });
});
