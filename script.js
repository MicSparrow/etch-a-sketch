const gridContainer = document.querySelector("#grid-container");
const magicButton = document.querySelector("#magic-button");
const gameReset = document.querySelector("#game-reset");

window.addEventListener('load', makeBlocks);

let size = 16;

function makeBlocks() {
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = "row";
    for (let j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.className = "box";
      row.appendChild(box);
    }
    document.getElementById('grid-container').appendChild(row);
    gridContainer.addEventListener("mouseover", changeColor);
  }
}

function changeColor(e) {
  const Color1 = Math.floor(Math.random() * 256);
  const Color2 = Math.floor(Math.random() * 256);
  const Color3 = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
}

magicButton.addEventListener("click", changeSize);

function changeSize() {
  let newSize = prompt("Enter desired grid size from 1 to 100");
  let desiredValue = parseInt(newSize);
  if (desiredValue > 1 && desiredValue <= 100) {
    size = newSize;
    clearGrid();
    makeBlocks();
  } else {
    alert("Enter a digit from 1-100 range!");
  }
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}

function resetGame() {
  gameReset.addEventListener('click', () =>
    location.reload());
}

resetGame();
