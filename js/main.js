const imagesArray = document.querySelectorAll('.main__leftElement');
const eventPhotos = document.querySelectorAll('.main__photoEventElement');
const photos = document.querySelectorAll('.main__photoEvent');
const title = document.querySelectorAll('.main__eventTitle');

imagesArray.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('main__leftElement--active');
    })
    image.addEventListener('mouseout', () => {
        setTimeout(() => {
            image.classList.remove('main__leftElement--active');
        }, 400)
    })

})

eventPhotos.forEach((photo, index) =>{
    photo.addEventListener('mouseover', ()=>{
        photos[index].classList.add('main__photoEvent--active');
        title[index].classList.add('main__eventTitle--active');
    })
    photo.addEventListener('mouseout', ()=>{
        photos[index].classList.remove('main__photoEvent--active');
        title[index].classList.remove('main__eventTitle--active');
    })
})