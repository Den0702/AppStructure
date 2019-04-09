function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
	const myPics = [
     './img/myPhoto1.png',
      './img/myPhoto2.JPG',
      './img/myPhoto3.jpg',
    ];
function handleClick(e) {
      if (!pic.classList.contains('pic_visible')) {
        pic.src = myPics[ Math.floor(Math.random()*myPics.length) ];
        pic.classList.add('pic_visible');
      } else {
        pic.classList.remove('pic_visible');
      }
    }
    nameLink.addEventListener('click', handleClick);

}

function onDeviceReady() {
	navigator.notification.beep(1);

}

