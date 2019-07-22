document.addEventListener('DOMContentLoaded', createGrid);

document.getElementById('reset-canvas').addEventListener('click', function (e) {
  e.preventDefault();
  // Grab the grid
  grid = document.querySelector('.grid');

  childrenEl = document.querySelectorAll('div.grid-pixel');

  index = 0;

  while (index < childrenEl.length) {
    grid.removeChild(childrenEl[index]);
    index += 1;
  }

  createGrid();
});

function createGrid() {
  // Grab the grid
  grid = document.querySelector('.grid');

  screenArea = window.innerHeight * window.innerWidth;
  index = 0;

  while (index < screenArea) {
    var one_pix = document.createElement('div');
    one_pix.classList.add('grid-pixel');

    grid.appendChild(one_pix);
    index = index + 256;

  }

  gridPixels = document.querySelectorAll('div.grid-pixel');

  console.log(gridPixels);

  index = 0;

  while (index < gridPixels.length) {
    gridPixels[index].addEventListener('mouseover', function (e) {
      this.classList.add('drawn');
    });

    index = index + 1;
  }

}
