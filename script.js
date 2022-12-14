'use strict';

const modalWindow = document.querySelector(`.modal-window`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModalWindow = document.querySelector(`.close-modal-window`);
const btnsShowModalWindow = document.querySelectorAll(`.show-modal-window`); //приставка ALL, выбор всех, а не только первого значения, в случае применения класса, не только к одному типу !!!
console.log(btnsShowModalWindow);

const showModalWindow = function () {
    console.log(`Click!`);
    modalWindow.classList.remove(`hidden`);
    // modalWindow.style.display = `block`; // Изменение конкретного параметра CSS !!!
    overlay.classList.remove(`hidden`);
}

const closeModalWindow = function () {
    modalWindow.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
};

for(let i = 0; i < btnsShowModalWindow.length; i++ ) {
    btnsShowModalWindow[i].addEventListener(`click`, showModalWindow);
};

btnCloseModalWindow.addEventListener(`click`, closeModalWindow);
overlay.addEventListener(`click`, closeModalWindow);

document.addEventListener(`keydown`, function (e) {
    console.log(e.key);

    if (e.key === `Escape` && !modalWindow.classList.contains(`hidden`)) {
        closeModalWindow();
    } // && логическое И, (пересчёт событий)
}) // по всей странице слушает событие ( нажатие и тд.)!!!