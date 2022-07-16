console.log('js');

let infoPages = document.getElementsByClassName('infoPage');

let aboutMeContainer = document.getElementById('aboutMeContainer');
let currentWorkContainer = document.getElementById('currentWorkContainer');
let followMeContainer = document.getElementById('followMeContainer');
let contactMeContainer = document.getElementById('contactMeContainer');

let aboutMePage = document.getElementById('aboutMePage');
let currentWorkPage = document.getElementById('currentWorkPage');
let followMePage = document.getElementById('followMePage');
let contactMePage = document.getElementById('contactMePage');

const showOverlay = function (page, container) {
    page.style.display = 'grid';
    container.style.display = 'block';
  }

document.onclick = function(event){
  let target = event.target;
    if(target.className == 'overlay') {
      target.style.display = 'none';
    } 
  }

const closeOverlay = function (page, container) {
    page.style.display = 'none';
    container.style.display = 'none';
    console.log(container.style.display);
}
