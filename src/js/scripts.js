"use strict";

const $body = document.querySelector('.js-body');
const $header = document.querySelector('.js-header');
const $btnNav = document.querySelector('.js-btnNav');
const $nav = document.querySelector('.js-nav');

window.addEventListener('scroll', () => {
    window.pageYOffset > 0 ? $header.classList.add('header--scroll') : $header.classList.remove('header--scroll');
});

$btnNav.addEventListener('click', () => {
    $btnNav.classList.toggle('btn-nav--active');
    $nav.classList.toggle('nav--active');
    $header.classList.toggle('header--active');
    $body.classList.toggle('no-scroll');
});
