const intro = document.getElementById("intro");
const garden = document.getElementById("garden");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const flowersWrap = document.getElementById("flowers");

const FLOWER_COUNT = 6;
const FINAL_MESSAGE_DELAY_MS = 5200;

function showPanel(panel) {
  [intro, garden, message].forEach((el) => {
    const isCurrent = el === panel;
    el.classList.toggle("panel--visible", isCurrent);
    el.setAttribute("aria-hidden", String(!isCurrent));
  });
}

function createFlower(index) {
  const flower = document.createElement("div");
  flower.className = "flower";

  const delay = index * 0.35;
  flower.style.animationDelay = `${delay}s`;

  const stem = document.createElement("div");
  stem.className = "stem";
  stem.style.animationDelay = `${delay}s`;

  const bloom = document.createElement("div");
  bloom.className = "bloom";
  bloom.style.animationDelay = `${1.35 + delay}s`;

  for (let i = 0; i < 5; i += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    bloom.appendChild(petal);
  }

  const core = document.createElement("span");
  core.className = "core";
  bloom.appendChild(core);

  flower.appendChild(stem);
  flower.appendChild(bloom);

  return flower;
}

function growFlowers() {
  flowersWrap.innerHTML = "";
  for (let i = 0; i < FLOWER_COUNT; i += 1) {
    flowersWrap.appendChild(createFlower(i));
  }
}

startBtn.addEventListener("click", () => {
  showPanel(garden);
  growFlowers();

  window.setTimeout(() => {
    showPanel(message);
  }, FINAL_MESSAGE_DELAY_MS);
});