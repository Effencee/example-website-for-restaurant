const nav = document.querySelector('.nav');
const headerHeight = document.querySelector('.header').getBoundingClientRect().height;
const mainHeight = document.querySelector('.main').getBoundingClientRect().height;
const sectionHeight = document.querySelector('.section').getBoundingClientRect().height;
const galleryHeight = document.querySelector('.gallery').getBoundingClientRect().height;

const liElements = {
    one: document.querySelector('.nav__linkOne'),
    two: document.querySelector('.nav__linkTwo'),
    three: document.querySelector('.nav__linkThree'),
    four: document.querySelector('.nav__linkFour'),
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1) {
        nav.style.backgroundColor = 'black';
        nav.style.position = 'fixed';
    } else {
        nav.style.backgroundColor = '';
        nav.style.position = '';
    }
})

liElements.one.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        left: 0,
        top: headerHeight,
        behavior: 'smooth'
    });
})

liElements.two.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        left: 0,
        top: headerHeight + mainHeight,
        behavior: 'smooth'
    })
})

liElements.three.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        left: 0,
        top: headerHeight + mainHeight + sectionHeight,
        behavior: 'smooth'
    })
})

liElements.four.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        left: 0,
        top: headerHeight + mainHeight + sectionHeight + galleryHeight,
        behavior: 'smooth'
    })
})