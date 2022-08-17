const colors = [
  ["#fddb92", "#d1fdff"],
  ["#ff9a9e", "#fad0c4"],
  ["#fad0c4", "#ffd1ff"],
  ["#f6d365", "#fda085"],
  ["#a1c4fd", "#c2e9fb"],
  ["#cfd9df", "#e2ebf0"],
  ["#a8edea", "#fed6e3"],
  ["#fff1eb", "#ace0f9"],
  ["#f3e7e9", "#e3eeff"],
  ["#E3FDF5", "#FFE6FA"]
];

function changeBackgroundImage() {
  const background1 = colors[Math.floor(Math.random() * colors.length)][0];
  const background2 = colors[Math.floor(Math.random() * colors.length)][1];
  document.body.style.backgroundImage = `linear-gradient(to right, ${background1} 20%, ${background2} 80%)`;
}
changeBackgroundImage();



