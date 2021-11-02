import { Rive, Layout, Fit, Alignment } from "rive-js";

const button = document.getElementById("toggle");

function updateCanvas(element, width, height) {
  const ratio = Math.ceil(window.devicePixelRatio);
  let canvas = element;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
}

let layout = new Layout({
  fit: Fit.Contain,
  alignment: Alignment.Center,
});

const r = new Rive({
  src: "/assets/main.riv",
  canvas: document.getElementById("themeSwitchButton"),
  autoplay: true,
  artboard: "SunToMoon",
  layout: layout,
  stateMachines: "Toggle",
  onLoad: (_) => {
    updateCanvas(document.getElementById("themeSwitchButton"), 39, 39);
    if (localStorage.theme === "dark") {
      r.stateMachineInputs("Toggle")[0].value = true;
    } else {
      r.stateMachineInputs("Toggle")[0].value = false;
    }
    button.onclick = () => {
      if (!r.stateMachineInputs("Toggle")[0].value) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        r.stateMachineInputs("Toggle")[0].value =
          !r.stateMachineInputs("Toggle")[0].value;
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        r.stateMachineInputs("Toggle")[0].value =
          !r.stateMachineInputs("Toggle")[0].value;
      }
    };
  },
});

const navSwitchButton = document.querySelector("#navSwitchButton");
const nav = new Rive({
  src: "/assets/main.riv",
  canvas: document.querySelector("#navswitch"),
  autoplay: true,
  artboard: "Nav",
  stateMachines: "switch",
  onLoad: (_) => {
    updateCanvas(document.getElementById("navswitch"), 48, 36);
    navSwitchButton.onclick = () => {
      nav.stateMachineInputs("switch")[0].fire();
    };
  },
});

const SideBarContainer = document.getElementById("SideBarContainer");
const DocsScrollArea = document.getElementById("docsScrollArea");

navSwitchButton.addEventListener("click", () => {
  if (DocsScrollArea.classList.contains("hidden")) {
    SideBarContainer.animate(
      {
        transform: ["translateX(0)", "translateX(-100%)"],
        opacity: [1, 0],
      },
      {
        fill: "forwards",
        duration: 500,
      },
    ).onfinish = function () {
      DocsScrollArea.classList.remove("hidden");
      SideBarContainer.classList.add("hidden");
      DocsScrollArea.animate(
        {
          transform: ["translateX(-100px)", "translateX(0)"],
          opacity: [0, 1],
        },
        {
          fill: "forwards",
          duration: 500,
        },
      );
    };
  } else {
    DocsScrollArea.animate(
      {
        transform: ["translateX(0px)", "translateX(-100%)"],
        opacity: [1, 0],
      },
      500,
    ).onfinish = function () {
      DocsScrollArea.classList.add("hidden");
      SideBarContainer.classList.remove("hidden");
      SideBarContainer.animate(
        {
          transform: ["translateX(-100%)", "translateX(0)"],
          opacity: [0, 1],
        },
        {
          fill: "forwards",
          duration: 500,
        },
      );
    };
  }
});
