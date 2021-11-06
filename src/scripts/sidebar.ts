let intersectingH1Elements = [];

let intersectingH2Element;
let observer;

const activeClass = {
  H1: ["text-blue-500", "border-l-2", "border-blue-400", "before:opacity-100"],
  H2: ["text-blue-400", "border-l-2", "border-blue-400", "before:opacity-100"],
};

const inActiveClass = {
  H1: ["text-slate-700", "before:opacity-30"],
  H2: ["text-slate-400", "before:opacity-30"],
};

function removeClass(elementId, Classes) {
  document.getElementById(elementId).classList.remove(...Classes);
}
function addClass(elementId, Classes) {
  document.getElementById(elementId).classList.add(...Classes);
}

function applyActiveClass(elementName, elementId) {
  removeClass(elementId, inActiveClass[elementName]);
  addClass(elementId, activeClass[elementName]);
}

function applyInactiveClass(elementName, elementId) {
  removeClass(elementId, activeClass[elementName]);
  addClass(elementId, inActiveClass[elementName]);
}

observer = new IntersectionObserver(
  (entries, observer) => {
    for (let index = 0; index < entries.length; index++) {
      let element = entries[index];
      if (element.isIntersecting) {
        /*
          It's all about knowing which element
          is Intersecting Viewport or Intersected Viewport 
        */
        if (element.target.tagName !== "H1") {
          let ParentH1 = document.getElementById(element.target.id + "-link").parentElement.parentElement.parentElement.previousElementSibling;
          if (intersectingH2Element !== undefined) {
            applyInactiveClass("H2", intersectingH2Element.id);
            intersectingH2Element = document.getElementById(
              element.target.id + "-link",
            );
            applyActiveClass("H2", intersectingH2Element.id);
          } else {
            intersectingH2Element = document.getElementById(
              element.target.id + "-link",
            );
            applyActiveClass("H2", intersectingH2Element.id);
          }
          intersectingH1Elements = [...intersectingH1Elements, ParentH1];
        } else {
          intersectingH1Elements = [
            ...intersectingH1Elements,
            document.getElementById(element.target.id + "-link"),
          ];
        }
      }
    }
    console.log(intersectingH1Elements);
    console.log(intersectingH2Element);
  },
  {
    root: document.getElementById("docsScrollArea"),
    rootMargin: "-35% 0px -35% 0px",
    threshold: 0,
  },
);

for (const key in document.getElementsByClassName('LeftSideBarItems')) {
  if (Object.prototype.hasOwnProperty.call(document.getElementsByClassName('LeftSideBarItems'), key)) {
    const element = document.getElementsByClassName('LeftSideBarItems')[key];
    observer.observe(element);   
  }
}