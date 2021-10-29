import { Rive ,Layout, Fit, Alignment } from "rive-js";
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

const homeIcon = document.querySelector("#homeIconContainer");
const homeM = window.innerWidth >= 624 ? document.querySelector("#homeIcon") : document.querySelector("#homeIconMobile")
const homeSize = window.innerWidth >= 624 ? { width: 63.99,height: 63.99 } : { width: 24, height: 24 } ;
const home = new Rive({
  src: "/assets/main.riv",
  canvas: homeM,
  autoplay: true,
  artboard: "Home",
  stateMachines: "switch",
  onLoad: (_) => {
    updateCanvas(homeM, homeSize.width, homeSize.height);
    homeIcon.onmouseenter = () => {
      home.stateMachineInputs("switch")[0].fire();
    };
    homeIcon.onmouseleave = () => {
      home.stateMachineInputs("switch")[0].fire();
    };
  },
});

const msgIcon = document.querySelector("#msgIconContainer");
const msgM = window.innerWidth >= 624 ? document.querySelector("#msgIcon") : document.querySelector("#msgIconMobile")
const msgSize = window.innerWidth >= 624 ? { width: 63.99,height: 63.99 } : { width: 24, height: 24 } ;
const msg = new Rive({
  src: "/assets/main.riv",
  canvas: msgM,
  autoplay: true,
  artboard: "Chat",
  stateMachines: "switch",
  onLoad: (_) => {
    updateCanvas(msgM, msgSize.width, msgSize.height);
    msgIcon.onmouseenter = () => {
      msg.stateMachineInputs("switch")[0].fire();
    };
    msgIcon.onmouseleave = () => {
      msg.stateMachineInputs("switch")[0].fire();
    };
  },
});
const notesIcon = document.querySelector("#notesIconContainer");
const notesM = window.innerWidth >= 624 ? document.querySelector("#notesIcon") : document.querySelector("#notesIconMobile")
const notesSize = window.innerWidth >= 624 ? { width:51.5475, height:79.435862069 } : { width: 20.619, height: 31.774344827 } ;
const notes = new Rive({
  src: "/assets/main.riv",
  canvas: notesM,
  autoplay: true,
  artboard: "Notes",
  stateMachines: "switch",
  onLoad: (_) => {
    updateCanvas(notesM, notesSize.width, notesSize.height );
    notesIcon.onmouseenter = () => {
      notes.stateMachineInputs("switch")[0].fire();
    };
    notesIcon.onmouseleave = () => {
      notes.stateMachineInputs("switch")[0].fire();
    };
  },
});
const docsIcon = document.querySelector("#docsIconContainer");
const docsM = window.innerWidth >= 624 ? document.querySelector("#docsIcon") : document.querySelector("#docsIconMobile")
const docsSize = window.innerWidth >= 624 ? { width: 234, height: 70  } : { width: 78, height: 23.340518018 } ;

const docs = new Rive({
  src: "/assets/main.riv",
  canvas: docsM,
  autoplay: true,
  artboard: "Docs",
  stateMachines: "switch",
  onLoad: (_) => {
    updateCanvas( docsM, docsSize.width,docsSize.height );
    docsIcon.onmouseenter = () => {
      docs.stateMachineInputs("switch")[0].value =
        !docs.stateMachineInputs("switch")[0].value;
    };
    docsIcon.onmouseleave = () => {
      docs.stateMachineInputs("switch")[0].value =
        !docs.stateMachineInputs("switch")[0].value;
    };
  },
});
