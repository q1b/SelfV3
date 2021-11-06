const navOpenButton = document.getElementById('navSwitchButton');
const navCloseButton = document.getElementById('navCloseButton');

const navDialog = document.getElementById('nav-dialog');

let overflow = document.documentElement.style.overflow
let paddingRight = document.documentElement.style.paddingRight

let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

navDialog.classList.add('hidden');
let isNavOpen = false;

let priDur = 300;
let itsDur = 50;
let itsDelay = 50;
let secDur = 500;

const navOverlay = document.getElementById('nav-dialog-overlay');

const navOverlayAle = navOverlay.animate({
    opacity:[0,0.8],
  },{
    duration: priDur,
    fill:'both',
    easing:'cubic-bezier(.2,.8,.4,1)',
  });

const navDialogContainer = document.getElementById('nav-dialog-container');

const navDialogContainerAle = navDialogContainer.animate(
  [
    {
      transform:`translate${window.innerWidth < 624 ? 'X' : 'Y' }(-120%) scale(0.9)`,
      opacity:0,
    },
    {
      transform:'translate(0px) scale(1)',
      opacity:1,
    }
  ],
  {
    duration: secDur,
    fill:'both',
    easing:'cubic-bezier( 0.23, 0.4, 0.32,1.33)',
  }
);

let navItems = {};
// let navItemsAle = {};
let navItemsEnterAle = {};
// navItemsEnterAle[0].reverse()
// navItemsEnterAle[1].reverse()

document.querySelectorAll('.NavItem').forEach((element,i) => {
  navItems[i] = element;
  navItemsEnterAle[i] = element.animate({
        transform:['translateY(-10%)','translateY(0%)'],
        opacity:['0','1']
      },
      {
        duration: itsDur*(i+1),
        delay: itsDelay*(i+1),
        endDelay:5*(i+1),
        fill:'both',
        easing:'cubic-bezier(.2,.8,.4,1)',
  });
});  

function openNavAnimate(){
    navDialog.classList.remove('hidden');
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`
    Object.values(navItemsEnterAle).forEach((ale)=>{
      ale.playbackRate = +1;
      ale.play();
    })
    navOverlayAle.playbackRate = +1;
    navDialogContainerAle.playbackRate = +1;
    navOverlayAle.play();
    navDialogContainerAle.play();
    isNavOpen = !isNavOpen;
}
function closeNavAnimate(){
    Object.values(navItemsEnterAle).forEach((ale,i)=>{
          ale.playbackRate = -1;
          ale.play();
          if(i===Object.values(navItemsEnterAle).length-5){
            ale.onfinish = function() {
              if(!isNavOpen){
                navOverlayAle.playbackRate = -1;
                navDialogContainerAle.playbackRate = -1;
                navOverlayAle.play();
                navDialogContainerAle.play();
                setTimeout(() => {
                  navDialog.classList.add('hidden');
                  document.documentElement.style.overflow = overflow;
                  document.documentElement.style.paddingRight = paddingRight;
                }, secDur);
              }
            }
          }
    })
    isNavOpen = !isNavOpen;
}

function animateNav(){
  if(!isNavOpen) {
    openNavAnimate();
  } else {
    closeNavAnimate();
  }
}

navOpenButton.addEventListener('click',()=>{
  animateNav()
});

const navBigSwitchButton = document.getElementById('navBigSwitchButton');

navBigSwitchButton.addEventListener('click',()=>{
  animateNav()
});

document.addEventListener('keydown', function (event) {
  if ( event.ctrlKey && event.key === '/' ) {
    animateNav()
  }
});

navCloseButton.addEventListener('click',()=>{
  animateNav()
});