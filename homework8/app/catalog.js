'use strict'

const productCards = document.querySelectorAll('.product__item');

function listinerAddCartButtons() {
   const ButtonAddToCart = document.querySelectorAll('.btn1[productId]');
   ButtonAddToCart.forEach(function (button) {
      button.addEventListener('click', showButtonProductId);
   });
}
function showButtonProductId(event) {
   const productId = event.currentTarget.getAttribute('productId');
   addProductToCart(productId); //в файле cart.js
}

listinerAddCartButtons()

let productData = [];
productCards.forEach(function (productCard) {
   let productName = productCard.querySelector('.item_name').innerText;
   let productDesc = productCard.querySelector('.item_desc').innerText;
   let productPrice = +(productCard.querySelector('.item_price_value').innerText);

   productData.push({
      productName,
      productDesc,
      productPrice
      //productId
   })
})
