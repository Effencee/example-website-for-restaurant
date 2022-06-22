class ChangeContent {
    constructor() {}

    removeAddActiveLi() {
        const activeLi = allLiElements.findIndex(elem => elem.classList.contains('section__listElem--active'));
        allLiElements[activeLi].classList.remove('section__listElem--active');
    }

    update() {
        const allDivContent = [...document.querySelectorAll('.section__dish')];
        const activeLi = allLiElements.findIndex(elem => elem.classList.contains('section__listElem--active'));
        const activeDiv = allDivContent.findIndex(elem => elem.classList.contains('section__dish--active'));
        allDivContent[activeDiv].classList.remove('section__dish--active');
        switch(activeLi){
            case 0: allDivContent[0].classList.add('section__dish--active'); break;
            case 1: allDivContent[1].classList.add('section__dish--active'); break;
            case 2: allDivContent[2].classList.add('section__dish--active'); break;
            case 3: allDivContent[3].classList.add('section__dish--active'); break;
        }
    }
}

const changeContent = new ChangeContent();

const allLiElements = [...document.querySelectorAll('.section__listElem')];

allLiElements.forEach((li) => {
    li.addEventListener('click', (e) => {
        changeContent.removeAddActiveLi();
        e.target.classList.add('section__listElem--active');
        changeContent.update();
    })
})