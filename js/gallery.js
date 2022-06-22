const slideList = [{
    img: '../img/event1.jpg'
}, {
    img: '../img/event2.jpg'
}, {
    img: '../img/event3.jpg'
}, {
    img: '../img/event4.jpg'
}, {
    img: '../img/main_sek1.jpg'
}, {
    img: '../img/main_sek2.jpg'
}, {
    img: '../img/main_sek3.jpg'
}, {
    img: '../img/main_sek4.jpg'
}];

const image = document.querySelector('.gallery__img');
const prev = document.querySelector('.gallery__prev');
const next = document.querySelector('.gallery__next');

let active = 0;

const changeSlide = () => {
    active++;
    if (active == slideList.length)
        active = 0;
    else if(active < 0)
        active = slideList.length-1;

    image.src = slideList[active].img;
}

let interval = setInterval(changeSlide, 3000);


next.addEventListener('click', ()=>{
    changeSlide();
    clearInterval(interval);
    interval = setInterval(changeSlide, 3000);
})

prev.addEventListener('click', ()=>{
    active-=2;
    changeSlide();
    clearInterval(interval);
    interval = setInterval(changeSlide, 3000);
})