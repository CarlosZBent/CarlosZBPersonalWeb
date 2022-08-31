// console.log('js');

let infoPages = document.getElementsByClassName('infoPage');

let aboutMeContainer = document.getElementById('aboutMeContainer');
let currentWorkContainer = document.getElementById('currentWorkContainer');
let followMeContainer = document.getElementById('followMeContainer');
let contactMeContainer = document.getElementById('contactMeContainer');

let aboutMePage = document.getElementById('aboutMePage');
let currentWorkPage = document.getElementById('currentWorkPage');
let followMePage = document.getElementById('followMePage');
let contactMePage = document.getElementById('contactMePage');

let subscribeEmail = document.getElementById('member_email');
let subscribeButton = document.getElementById('member_submit');

const showOverlay = function (page, container) {
    page.style.display = 'grid';
    container.style.display = 'block';
  };

document.onclick = function(event){
  let target = event.target;
    if(target.className == 'overlay') {
      target.style.display = 'none';
    } 
  };

const closeOverlay = function (page, container) {
    page.style.display = 'none';
    container.style.display = 'none';
};

// animate button on hover
subscribeButton.onmouseover = () => {
  subscribeButton.classList += ' vibrate-1';
  subscribeButton.addEventListener('animationend', () => {
    subscribeButton.className = 'revue-subscribe-button';
  })
};

// when subscribe button is clicked its animation ends
subscribeButton.onclick = () => {
  subscribeButton.classList = 'revue-subscribe-button';
};

// animate subscribe button when email field is interacted with
subscribeEmail.oninput = () => {
  subscribeButton.classList += ' vibrate-1';
  subscribeButton.addEventListener('animationend', () => {
    subscribeButton.className = 'revue-subscribe-button';
  })
};
