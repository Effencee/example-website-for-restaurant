const array = ['Welcome', 'Check our offer', 'explore me'];
const headerCursor = document.querySelector('.header__cursor');
let headerSpanText = document.querySelector('.header__titleText');
let letter = -10;
let text = 0;

const arrayTextInDiv = () => {
    if (letter >= 0) headerSpanText.textContent += array[text][letter];
    letter++;
    if (letter == array[text].length) {
        text++;
        if (text == array.length) {
            letter = -10;
            text = 0;
        }
        return setTimeout(() => {
            letter = -10;
            headerSpanText.textContent = '';
            arrayTextInDiv();
        }, 2000)
    }

    setTimeout(arrayTextInDiv, 100);
}

arrayTextInDiv();

const changeCursorVisibility = () => {
    headerCursor.classList.toggle('header__cursor--active');
}

setInterval(changeCursorVisibility, 400);