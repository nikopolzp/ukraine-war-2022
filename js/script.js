let container = document.querySelector(".container");
for (let i = 1; i <= 75; i++) {
  let dot = document.createElement("div");
  dot.classList.add("element");
  container.appendChild(dot);
}

let dotAll = document.querySelectorAll(".element");
let animation = anime.timeline({
  targets: dotAll,
  easing: "easeInOutExpo",
  loop: true,
  delay: anime.stagger(75, { grid: [15, 5], from: "center" }),
});

animation
  .add({
    rotateZ: 180,
    translateY: anime.stagger(-20, { grid: [15, 5], from: "center", axis: "y" }),
    translateX: anime.stagger(-20, { grid: [15, 5], from: "center", axis: "x" }),
    opacity: 1,
  })

  .add({
    borderRadius: 50,
  })
  .add({
    scale: 0.2,
    opacity: 0.2,
  });
animation
  .add({
    rotateZ: 180,
    translateY: anime.stagger(0, { grid: [15, 5], from: "center", axis: "y" }),
    translateX: anime.stagger(0, { grid: [15, 5], from: "center", axis: "x" }),
    opacity: 1,
  })

  .add({
    scale: 1,
    borderRadius: 0,
  })
  .add({
    rotateZ: -90,
  });

let containerOne = document.querySelector(".container-two");
for (let i = 1; i <= 75; i++) {
  let dot = document.createElement("div");
  dot.classList.add("element");
  containerOne.appendChild(dot);
}

let dotHalf = document.querySelectorAll(".element");
let anima = anime.timeline({
  targets: dotHalf,
  easing: "easeInOutExpo",
  loop: true,
  delay: anime.stagger(75, { grid: [15, 5], from: "center" }),
});

anima
  .add({
    rotateZ: 180,
    translateY: anime.stagger(-20, { grid: [15, 5], from: "center", axis: "y" }),
    translateX: anime.stagger(-20, { grid: [15, 5], from: "center", axis: "x" }),
    opacity: 1,
  })

  .add({
    borderRadius: 50,
  })
  .add({
    scale: 0.2,
    opacity: 0.2,
  });
anima
  .add({
    rotateZ: 180,
    translateY: anime.stagger(0, { grid: [15, 5], from: "center", axis: "y" }),
    translateX: anime.stagger(0, { grid: [15, 5], from: "center", axis: "x" }),
    opacity: 1,
  })

  .add({
    scale: 1,
    borderRadius: 0,
  })
  .add({
    rotateZ: -90,
  });

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
