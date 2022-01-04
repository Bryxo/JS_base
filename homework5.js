//===========ДОМАШНЕЕ ЗАДАНИЕ №5=============

// <!-- Задание 5.1. Используя поиск по id, получите ссылку с текстом link4
// и выведите ее в консоль. -->
function example51 () {
    let five1 = document.getElementById('four');
    console.log(five1.textContent);
}
let button51 = document.getElementById('example51');
button51.addEventListener('click', example51);


// <!-- Задание 5.2. Используя поиск по имени класса, получите все элементы с классом .one
//   и выведите их в консоль. -->
function example52 () {
    let five2 = document.getElementsByClassName('one');
    console.log(five2);
}
let button52 = document.getElementById('example52');
button52.addEventListener('click', example52);


// <!-- Задание 5.3. Используя поиск по селектору (метод querySelectorAll) найдите только те ссылки с
// классом .card-link, которые находятся в .card-body и выведите их в консоль. -->
function example53 () {
    let five3 = document.querySelectorAll('div.card-body a');
    five3.forEach(function(a) {
        console.log(`Текст ссылки - ${a.innerHTML}! Класс у ссылки - ${a.className}!`);
    });
}
let button53 = document.getElementById('example53');
button53.addEventListener('click', example53);


// <!-- Задание 5.4. Используя поиск по селектору (метод querySelector) найдите div с атрибутом
//    aria-valuenow="50" и выведите его в консоль.
function example54 () {
    let five4 = document.querySelector('div.progress div[aria-valuenow="50"]');
        console.log(five4);
        console.log(`Значение aria-valuenow = ${five4.attributes[3].nodeValue}`);
}
let button54 = document.getElementById('example54');
button54.addEventListener('click', example54);



// <!-- Задание 5.5. Задание. Выведите содержимое тега title в консоль.
function example55 () {
    let five5 = document.title;
        console.log(five5);
}
let button55 = document.getElementById('example55');
button55.addEventListener('click', example55);


// <!-- Задание 5.6. Задание. Обратитесь к элементу с классом .mt-0 и получите его родителя - элемент с классом .media-body. -->
function example56 () {
    let five6 = document.querySelector('.mt-0');//получение родительского узла (parentNode)
        console.log(five6.parentNode);
}
let button56 = document.getElementById('example56');
button56.addEventListener('click', example56);


// <!-- Задание 5.7. Задание. Добавьте в div c помощью appendChild следующую разметку:
//    <h3>hello world</h3>    -->
function example57 () {
    let div57 = document.querySelector('div.exam57');//получение адреса нужного div
    let h3 = document.createElement('h3');//создание элемента h3
    h3.innerText='hello world';//вставка текста в элемент h3
    div57.appendChild(h3);//добавление элемента h3 перед закрывающим тегом родителя
}
let button57 = document.getElementById('example57');
button57.addEventListener('click', example57);


// <!-- Задание 5.8. Задание.
    // 1. Найдите элемент с классом .btn-outline-warning и удалите его.
    // 2. Аналогичным образом удалите элемент с классом .btn-outline-dark -->
function example58 () {
    let five81 = document.querySelector('.btn-outline-warning');//получение адреса кнопки по имени класса
    if (five81 !== null) {
        five81.remove();//удаление узла
    } 
    let five82 = document.querySelector('.btn-outline-dark');//получение адреса кнопки по имени класса
    if (five82 !== null) {
        five82.remove();//удаление узла
    } 
}
let button58 = document.getElementById('exam58');
button58.addEventListener('click', example58);


// <!-- Задание 5.9. Задание. Найдите кнопку с классом .btn-info и сделайте текст в кнопке: "Кнопка".-->
function example59 () {
    let five9 = document.querySelector('.btn-info');//получение адреса кнопки по имени класса
        five9.innerText = "Кнопка";//Замена текста
}
let button59 = document.getElementById('exam59');
button59.addEventListener('click', example59);


// <!-- Задание 5.10. Найдите тег ul. И добавьте ему класс one. -->
function example510 () {
    let five10 = document.querySelector('ul');//получение адреса списка
        five10.classList.add('one');//добавление класса
}
let button510 = document.getElementById('example510');
button510.addEventListener('click', example510);


// <!-- Задание 5.11. Найдите элемент с классом .nav-link и используя метод toggle из свойства classList
// у элемента, добавьте или уберите класс .active. -->
function example511 () {
    let five11 = document.querySelector('.nav-link');//получение адреса списка
        five11.classList.toggle('active');//проверка на наличие класса и его добавление/удаление 
}
let button511 = document.getElementById('example511');
button511.addEventListener('click', example511);


// <!-- Задание 5.12. Найдите элемент с классом .dropdown-menu и удалите этот класс, используя свойство classList у элемента, и метод remove(). -->
function exam512 () {
    let five12 = document.querySelector('.dropdown-menu');//получение адреса списка
        five12.classList.remove('dropdown-menu');//удаление класса
}
let button512 = document.getElementById('exam512');
button512.addEventListener('click', exam512);


// <!-- Задание 5.13. Добавьте в div с классом .menu следующую разметку:
// <a href="#">link</a> используя метод insertAdjacentHTML. -->
function example513 () {
    let div513 = document.querySelector('div.menu513');//получение адреса нужного div
    div513.insertAdjacentHTML("afterbegin",'   <a href="#">link</a>  ')
}
let button513 = document.getElementById('example513');
button513.addEventListener('click', example513);



// <!-- Задание 5.14. Выведите в консоль значение атрибутов data-dismiss
//    и aria-label с помощью метода getAttribute. -->
function example514 () {
    let but514 = document.querySelector('.close514');//получение адреса button с классом close514
        console.log(but514.getAttribute('data-dismiss'));
        console.log(but514.getAttribute('aria-label'));
}
let button514 = document.getElementById('exam514');
button514.addEventListener('click', example514);


// <!-- Задание 5.15.Добавьте заголовку атрибут data-one="один" и атрибут
//data-two="два" с помощью метода setAttribute. -->
function example515 () {
    let div515 = document.querySelector('div.exam515 h1');//получение адреса h1 в div с классом exam515
        div515.setAttribute('data-one', 'один');//установка атрибута data-one со значением 'один'
        div515.setAttribute('data-two', 'два');
}
let button515 = document.getElementById('example515');
button515.addEventListener('click', example515);


// <!-- Задание 5.16. Найдите заголовок с id="title" и замените значение id на что-то другое. -->
function example516 () {
    let div516 = document.getElementById('title');//получение адреса h2 по id
        div516.id = 'exchangetitle';//установка нового id
}
let button516 = document.getElementById('example516');
button516.addEventListener('click', example516);



// <!-- Задание 5.17. Отследите когда все теги будут добавлены на страницу (событие
 //   DOMContentLoaded) и выведите alert'ом сообщение: "все теги добавлены на страницу". -->

document.addEventListener('DOMContentLoaded', function() {
    alert('Задание 5.17: html загружен, возможно не загружены картинки или стили');
});


// <!-- Задание 5.18. Дождитесь когда все картинки загрузятся (событие load) и
//    покажите с помощью alert сообщение: "все картинки загружены". -->
 document.addEventListener('load', function() {
    alert('Задание 5.18: html загружен (всё загружено)');
});


// <!-- Задание 5.19. Сделайте, чтобы по клику по кнопке с классом .btn появлялся alert('клик') -->
function example519 () {
        alert("Задание 5.19: кнопка с классом .btn нажата!")
}
let button519 = document.querySelector('.btn519');//получение адреса кнопки с классом btn519
button519.addEventListener('click', example519);


// <!-- Задание 5.20. Сделайте, чтобы при наведении на textarea в консоли
//    появлялось сообщение: "вы навели на textarea" -->
function example520 () {
    console.log("Задание 5.20: вы навели мышью на область textarea!")
}
let button520 = document.querySelector('textarea');//получение адреса textarea
button520.addEventListener('mouseover', example520);


// <!-- Задание 5.21. 
// 1. Сохраните в переменную коллекцию с картинками.
// 2. Пробегитесь по этой коллекции с помощью цикла или forEach
// и выведите каждую картинку в консоль. Выведите в консоль только
// элементы коллекции, не нужно пытаться сделать, чтобы в консоли
// появилось изображение. -->
function example521 () {
    let div521 = document.querySelectorAll('div.exam521 img');//получение коллекции всех img 
// в div с классом exam521
    div521.forEach(function(a) {
        console.log(a);//вывод в консоль
    });
}
let button521 = document.getElementById('example521');
button521.addEventListener('click', example521);


// TODO! начать тут 
// <!-- Задание 5.22.     
// 1. Сохраните в переменную коллекцию элементов с классом one. Для получения
// элементов используйте метод .getElementsByClassName() 
// 2. С помощью цикла переберите эту коллекцию и выведите в консоль название тега.    -->
let div522 = document.getElementsByClassName('one522');//получение коллекции всех тегов 
// в div с классом exam521
div521.forEach(function(a) {
    console.log(a);//вывод в консоль
});

let button522 = document.getElementById('example522');
button522.addEventListener('click', example522);
