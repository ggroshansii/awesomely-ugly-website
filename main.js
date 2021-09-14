const body = document.querySelector('body');
const onLoadDiv = document.querySelector('.on-load');
const overallContainer = document.querySelector('.container');
const imageBtn = document.querySelector('.image-btn');
const logo1 = document.querySelector('.logo-1');
const logo2 = document.querySelector('.logo-2');

body.style.backgroundImage = "";
overallContainer.style.display = "none";
onLoadDiv.style.display = 'flex';
window.addEventListener('load', (event) => {
    let onLoad = setTimeout(() => {
        body.style.backgroundImage = "url('https://shoutitoutdesign.com/wp-content/uploads/2016/10/90s-website-style.jpg')";
        overallContainer.style.display = 'block';
        onLoadDiv.style.display = 'none';
    }, 3500)
  });

  imageBtn.addEventListener('click', event => {
    if (logo2.style.display === 'none') {
        logo1.style.display = 'none';
        logo2.style.display = 'block';
    } else {
        logo2.style.display = 'none';        
        logo1.style.display = 'block';
    }

  });