

document.addEventListener('DOMContentLoaded', () => {

let cartIcon = document.querySelector('#nutri-img'); 
let cart = document.querySelector('.nutri-box');
let closeCart = document.querySelector('#close-btn');

cartIcon.onclick = () => {
  cart.classList.add('active');
};

closeCart.onclick = () => {
  cart.classList.remove('active');
};

});