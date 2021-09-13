const body = document.querySelector('body')
const onLoadDiv = document.querySelector('.on-load')
const overallContainer = document.querySelector('.container');


window.addEventListener('load', (event) => {
    body.style.backgroundImage = "";
    overallContainer.style.display = "none";
    onLoadDiv.style.display = 'flex';
    let onLoad = setTimeout(() => {
        body.style.backgroundImage = "url('https://shoutitoutdesign.com/wp-content/uploads/2016/10/90s-website-style.jpg')";
        overallContainer.style.display = 'block';
        onLoadDiv.style.display = 'none';
    }, 3500)

  });