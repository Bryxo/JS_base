'use strict'
const cartQuantity = document.querySelector('.cart__quantity');
const openCartBtn = document.querySelector('.cart_js');
const openingCartDiv = document.querySelector('.cart__js_base');
const cartFullEl = document.querySelector('.cart__js_base_full');
const basketTotalValueEl = document.querySelector('.cart__js_base_summ');

openCartBtn.addEventListener('click', function () {
   openingCartDiv.classList.toggle('displayNone');
})

function increaseCartQuantity() {
   cartQuantity.innerText++;
}

let cart = {
};

function addProductToObject(productId) {
   if (!(productId in cart)) {
      cart[productId] = 1;
   } else {
      cart[productId]++;
   }
}

function renderProductInCart(productId) {
   let ProductExist = document.querySelector(`.productCount[productId="${productId}"]`);
   if (ProductExist) {
      increaseProductsQuantity(productId);
      recalculateSumForProduct(productId);
   } else {
      renderNewProductInCart(productId)
   }
}

function renderNewProductInCart(productId) {
   let productRow = `
   <div class="basketRow">
      <div>${productData[productId].productName}</div>
      <div>
         <span class="productCount" productId="${productId}">1</span> шт.
      </div>   
         <div>$${productData[productId].productPrice}</div>
      <div>  
         <span class="productTotalRow" productId="${productId}">$${productData[productId].productPrice}</span>
      </div>
   </div>
   `;
   cartFullEl.insertAdjacentHTML("beforebegin", productRow);
}

function increaseProductsQuantity(productId) {
   const productCountEl = document.querySelector(`.productCount[productId="${productId}"]`);
   productCountEl.textContent++;
}

function recalculateSumForProduct(productId) {
   const productTotalRowEl = document.querySelector(`.productTotalRow[productId="${productId}"]`);
   let totalPriceForRow = (cart[productId] * productData[productId].productPrice).toFixed(2);
   productTotalRowEl.textContent = totalPriceForRow;
}

function calculateAndRenderTotalBasketSum() {
   let totalSum = 0;
   for (let productId in cart) {
      totalSum += cart[productId] * productData[productId].productPrice;
   }
   basketTotalValueEl.textContent = totalSum.toFixed(2);
}

function addProductToCart(productId) {
   increaseCartQuantity(productId);
   addProductToObject(productId);
   renderProductInCart(productId);
   calculateAndRenderTotalBasketSum()
}
