const slides = document.querySelectorAll('.picture');


for(const i of slides) {
i.addEventListener('click', ()=> {
    removeActive();
    i.classList.add('active');
});
};

function removeActive () {
    slides.forEach((elemetOfMassiveSlides) => {
        elemetOfMassiveSlides.classList.remove('active');
    });
};