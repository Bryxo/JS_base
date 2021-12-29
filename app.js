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



//===========ДОМАШНЕЕ ЗАДАНИЕ №4=============
//  -----===-----Пример 1.1.-----=====-----
// Сделайте в стиле es5, а затем в стиле es6 
// (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
// конструктор Product, который принимает параметры name и price, сохраните их как
// свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
// который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
// не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
//es5 
function example411a () {
   function ProductES5 (nameES5, priceES5) {
      this.nameES5 = nameES5;
      this.priceES5 = priceES5;
   }
   ProductES5.prototype.make25PercentDiscount = function() {
      console.log(`Первоначальная цена "${this.nameES5}" = ${this.priceES5}`);
      this.priceES5 = this.priceES5 - this.priceES5 * (25 / 100);
      console.log(`Цена "${this.nameES5}" после 25% скидки  = ${this.priceES5}`);
   };
   let prod411a = new ProductES5('товар по ес5',1000);
   prod411a.make25PercentDiscount();
}

//es6 
function example411b () {
   class ProductES6 {
         constructor (nameES6, priceES6) {
         this.nameES6 = nameES6;
         this.priceES6 = priceES6;
      }
      make25PercentDiscount() {
         console.log(`Первоначальная цена "${this.nameES6}" = ${this.priceES6}`);
         this.priceES6 = this.priceES6 - this.priceES6 * (25 / 100);
         console.log(`Цена "${this.nameES6}" после 25% скидки  = ${this.priceES6}`);
      };
   }
      let prod411b = new ProductES6('товар по ес6',2000);
      prod411b.make25PercentDiscount();
}

let button411a = document.getElementById('example411a');
button411a.addEventListener('click', example411a);

let button411b = document.getElementById('example411b');
button411b.addEventListener('click', example411b);

//  -----===-----Пример 1.2.-----=====-----
// Сделайте в стиле es5, а затем в стиле es6 (по 
//    аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования), 
//    а) конструктор Post, который принимает параметры author, text, date и сохраняет
//    их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет 
//    принимать текст и записывать его в свойство text объекта.
//    б) конструктор AttachedPost, который принимает параметры author, text, date.
//    Проинициализируйте эти свойства с помощью конструктора Post, чтобы не 
//    дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
//    highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
//    Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
//    который будет назначать свойству highlighted значение true.

//es5 
function example412a () {
   function Post412a(author412a, text412a, date412a) {
      this.author412a = author412a;
      this.text412a = text412a;
      this.date412a = date412a;
   }
   Post412a.prototype.edit = function() {
      this.text412a = this.text412a;
   };
   function AttachedPost412a(author412a, text412a, date412a) {
      Post412a.call(this, author412a, text412a, date412a);
      this.highlighted = false;
   }
   AttachedPost412a.prototype = Object.create(Post412a.prototype); //унаследовали методы
   AttachedPost412a.prototype.constructor = AttachedPost412a;//унаследовали методы
   AttachedPost412a.prototype.makeTextHighlighted = function() {
      this.highlighted = true;
   };
   let first412a = new AttachedPost412a('john__es5', 'text2__es5','12.12.2222__es5');
   let second412a = new AttachedPost412a('Вася__es5', 'был__es5','01.01.0001__es5');
   second412a.edit();
   second412a.makeTextHighlighted();
   console.log(first412a);
   console.log(second412a);
}

//es6
function example412b () {
   class Post412b {
      constructor(author412b, text412b, date412b) {
         this.author412b = author412b;
         this.text412b = text412b;
         this.date412b = date412b;
      }
      edit() {
         this.text412b = this.text412b;
      }
   }  
   class AttachedPost412b extends Post412b {
         constructor(author412b, text412b, date412b) {
         super(author412b, text412b, date412b);
         this.highlighted = false;
      }
         makeTextHighlighted() {
         this.highlighted = true;
      }
   }
   let first412b = new AttachedPost412b('john__es6', 'text2__es6','12.12.2222__es6');
   let second412b = new AttachedPost412b('Вася__es6', 'был__es6','01.01.0001__es6');
   second412b.edit();
   second412b.makeTextHighlighted();
   console.log(first412b);
   console.log(second412b);
}

let button412a = document.getElementById('example412a');
button412a.addEventListener('click', example412a);

let button412b = document.getElementById('example412b');
button412b.addEventListener('click', example412b);