"use strict"
//===========ДОМАШНЕЕ ЗАДАНИЕ №3=============

//  -----===-----Пример 1.-----=====-----
//С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно

let button1 = document.getElementById('example1');
button1.addEventListener('click', example1);

function example1() {
   let n = 10;
   for (let i = 0; i <= n; i++) {
      if (i == 0) {
         console.log(`${i} - это нуль!`);
      }
      else if (i % 2 > 0) {
         console.log(`${i} - это нечетное число!`);
      }
      else {
         console.log(`${i} - это четное число!`);
      }
   }
};


//  -----===-----Пример 2.-----=====-----
//Выведите в консоль значения, указанные рядом с комментариями:

let button2 = document.getElementById('example2');
button2.addEventListener('click', example2);
const post = {
   author: "John", //вывести этот текст
   postId: 23,
   comments: [
      {
         userId: 10,
         userName: "Alex",
         text: "lorem ipsum",
         rating: {
            likes: 10,
            dislikes: 2 //вывести это число
         }
      },
      {
         userId: 5, //вывести это число
         userName: "Jane",
         text: "lorem ipsum 2", //вывести этот текст
         rating: {
            likes: 3,
            dislikes: 1
         }
      },
   ]
};
function example2() {
   console.log(post.author);
   console.log(post.comments[0].rating.dislikes);
   console.log(post.comments[1].userId);
   console.log(post.comments[1].text);
};
let button = document.getElementById('example2');
button.addEventListener('click', example2);


//  -----===-----Пример 3.-----=====-----
//Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :

let button3 = document.getElementById('example3');
button3.addEventListener('click', example3);
const products3 = [
   {
      id: 3,
      price: 200,
   },
   {
      id: 4,
      price: 900,
   },
   {
      id: 1,
      price:
         1000,
   },
];
function example3() {
   products3.forEach(beforePrice);
   products3.forEach(sales);
};
/**
 * Функция выводит значения цен продуктов до применения скидок с помощью метода forEach
 * @param {number} first - показатель индекса в массиве products3
 * @param {number} first.price - обращение к функции price объектов, хранящихся в массиве products3
 */
function beforePrice(first) {
   console.log(`${first.price} цена до применения скидки`);
};
/**
 * Функция изменяет значение цены продуктов с учетом применения скидок 15% с помощью метода forEach
 * @param {Number} volume - показатель индекса в массиве products3
 * @param {number} volume.price - обращение к функции price объектов, хранящихся в массиве products3
 */
function sales(volume) {
   volume.price = volume.price - volume.price * 0.15;
   console.log(`${volume.price} цена после применения скидки`);
};


//  -----===-----Пример 4.-----=====-----Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ ,
//как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.

const products4 = [
   {
      id: 3,
      price: 127,
      photos: [
         "1.jpg",
         "2.jpg",
      ]
   },
   {
      id: 5,
      price: 499,
      photos: []
   },
   {
      id: 10,
      price: 26,
      photos: [
         "3.jpg"
      ]
   },
   {
      id: 8,
      price: 78,
   },
];

function filterImg() {
   const isImage = products4.filter(function (product) {
      return "photos" in product && product.photos.length !== 0;
   });
   console.log(isImage);
}

function sortPrice() {
   const sortByPrice = products4.sort(function (product1, product2) {
      if (product1.price > product2.price) {
         return 1;
      }
      else if (product1.price < product2.price) {
         return -1;
      }
      return 0
   });
   console.log(sortByPrice);
}

let button41 = document.getElementById('filterImg');
button41.addEventListener('click', filterImg);

let button42 = document.getElementById('sortPrice');
button42.addEventListener('click', sortPrice);


// 5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла
// for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:
// for(…){/* здесь пусто */}
// Помните, что в первом, втором и третьем раздела цикла можно не только писать условия,
// или увеличивать счетчик например на 1, допустимы любые выражения, например вызовы функций.

//  -----===-----Пример 6.-----=====-----Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

function pyramid() {
   let x = 'x';
   console.log(x);
   for (let ii = 0; ii < 19; ii++) {
      x += 'x';
      console.log(x);
   }
}

let button6 = document.getElementById('example6');
button6.addEventListener('click', pyramid);