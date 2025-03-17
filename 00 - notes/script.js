const box = document.querySelector('box');

// get client height and width of screen
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.clientWidth);

// get scrolling position from top and total scrolling height available
window.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
});

// get mouse coordinates
window.addEventListener("mousemove", (e) => { 
    console.log(e.clientX, e.clientY);
});