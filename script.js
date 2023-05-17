'use strict'
const heading = document.querySelector('h1');
const days = document.querySelector('.days h3');
const hour = document.querySelector('.hours h3');
const minute = document.querySelector('.minutes h3');
const second = document.querySelector('.seconds h3');

const currentYear = new Date().getFullYear()
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)
heading.textContent = currentYear + 1;

const getDay = function () {
    const now = new Date();
    const diff = nextYear - now;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;


    days.textContent = d;
    hour.textContent = h < 10 ? `0${h}` : h;
    minute.textContent = m < 10 ? `0${m}` : m;
    second.textContent = s < 10 ? `0${s}` : s;
}

setTimeout(() => {
    document.querySelector('.spinner').classList.add('hide');
    document.querySelector('.count-down-container').classList.remove('hide')
}, 1000)

setInterval(getDay, 1000)
