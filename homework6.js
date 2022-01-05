//===========ДОМАШНЕЕ ЗАДАНИЕ №6=============
//document.cookie = "SameSite = Lax";


// <!-- Задание 5.1. 
// Используя поиск по id, получите ссылку с текстом link4 и выведите ее в консоль. -->
function example51() {
    let five1 = document.getElementById('four');
    console.log(five1.textContent);
}
let button51 = document.getElementById('example51');
button51.addEventListener('click', example51);


// <!-- Задание 5.2. 
// Используя поиск по имени класса, получите все элементы с классом .one  и выведите их в консоль. -->
function example52() {
    let five2 = document.getElementsByClassName('one');
    console.log(five2);
}
let button52 = document.getElementById('example52');
button52.addEventListener('click', example52);


// <!-- Задание 5.3.
// Используя поиск по селектору (метод querySelectorAll) найдите только те ссылки с
// классом .card-link, которые находятся в .card-body и выведите их в консоль. -->
function example53() {
    let five3 = document.querySelectorAll('div.card-body a');
    five3.forEach(function (a) {
        console.log(`Текст ссылки - ${a.innerHTML}! Класс у ссылки - ${a.className}!`);
    });
}
let button53 = document.getElementById('example53');
button53.addEventListener('click', example53);


// <!-- Задание 5.4. 
// Используя поиск по селектору (метод querySelector) найдите div с атрибутом
//  aria-valuenow="50" и выведите его в консоль. -->
function example54() {
    let five4 = document.querySelector('div.progress div[aria-valuenow="50"]');
    console.log(five4);
    console.log(`Значение aria-valuenow = ${five4.attributes[3].nodeValue}`);
}
let button54 = document.getElementById('example54');
button54.addEventListener('click', example54);


// <!-- Задание 5.5. 
// Выведите содержимое тега title в консоль. -->
function example55() {
    let five5 = document.title;
    console.log(five5);
}
let button55 = document.getElementById('example55');
button55.addEventListener('click', example55);


// <!-- Задание 5.6. 
// Обратитесь к элементу с классом .mt-0 и получите его родителя - элемент с классом .media-body. -->
function example56() {
    let five6 = document.querySelector('.mt-0');//получение родительского узла (parentNode)
    console.log(five6.parentNode);
}
let button56 = document.getElementById('example56');
button56.addEventListener('click', example56);


// <!-- Задание 5.7. 
// Добавьте в div c помощью appendChild следующую разметку:
//    <h3>hello world</h3>  . -->
function example57() {
    let div57 = document.querySelector('div.exam57');//получение адреса нужного div
    let h3 = document.createElement('h3');//создание элемента h3
    h3.innerText = 'hello world';//вставка текста в элемент h3
    div57.appendChild(h3);//добавление элемента h3 перед закрывающим тегом родителя
}
let button57 = document.getElementById('example57');
button57.addEventListener('click', example57);


// <!-- Задание 5.8.
// 1. Найдите элемент с классом .btn-outline-warning и удалите его.
// 2. Аналогичным образом удалите элемент с классом .btn-outline-dark. -->
function example58() {
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


// <!-- Задание 5.9. 
// Найдите кнопку с классом .btn-info и сделайте текст в кнопке: "Кнопка". -->
function example59() {
    let five9 = document.querySelector('.btn-info');//получение адреса кнопки по имени класса
    five9.innerText = "Кнопка";//Замена текста
}
let button59 = document.getElementById('exam59');
button59.addEventListener('click', example59);


// <!-- Задание 5.10. 
// Найдите тег ul. И добавьте ему класс one. -->
function example510() {
    let five10 = document.querySelector('ul');//получение адреса списка
    five10.classList.add('one');//добавление класса
}
let button510 = document.getElementById('example510');
button510.addEventListener('click', example510);


// <!-- Задание 5.11. 
// Найдите элемент с классом .nav-link и используя метод toggle из свойства classList
// у элемента, добавьте или уберите класс .active. -->
function example511() {
    let five11 = document.querySelector('.nav-link');//получение адреса списка
    five11.classList.toggle('active');//проверка на наличие класса и его добавление/удаление 
}
let button511 = document.getElementById('example511');
button511.addEventListener('click', example511);


// <!-- Задание 5.12. 
// Найдите элемент с классом .dropdown-menu и удалите этот класс, используя свойство classList у элемента, и метод remove(). -->
function exam512() {
    let five12 = document.querySelector('.dropdown-menu');//получение адреса списка
    five12.classList.remove('dropdown-menu');//удаление класса
}
let button512 = document.getElementById('exam512');
button512.addEventListener('click', exam512);


// <!-- Задание 5.13. 
// Добавьте в div с классом .menu следующую разметку:
// <a href="#">link</a> используя метод insertAdjacentHTML. -->
function example513() {
    let div513 = document.querySelector('div.menu513');//получение адреса нужного div
    div513.insertAdjacentHTML("afterbegin", '   <a href="#">link</a>  ')
}
let button513 = document.getElementById('example513');
button513.addEventListener('click', example513);



// <!-- Задание 5.14. 
// Выведите в консоль значение атрибутов data-dismiss
//    и aria-label с помощью метода getAttribute. -->
function example514() {
    let but514 = document.querySelector('.close514');//получение адреса button с классом close514
    console.log(but514.getAttribute('data-dismiss'));
    console.log(but514.getAttribute('aria-label'));
}
let button514 = document.getElementById('exam514');
button514.addEventListener('click', example514);


// <!-- Задание 5.15. 
// Добавьте заголовку атрибут data-one="один" и атрибут
// data-two="два" с помощью метода setAttribute. -->
function example515() {
    let div515 = document.querySelector('div.exam515 h1');//получение адреса h1 в div с классом exam515
    div515.setAttribute('data-one', 'один');//установка атрибута data-one со значением 'один'
    div515.setAttribute('data-two', 'два');
}
let button515 = document.getElementById('example515');
button515.addEventListener('click', example515);


// <!-- Задание 5.16. 
// Найдите заголовок с id="title" и замените значение id на что-то другое. -->
function example516() {
    let div516 = document.getElementById('title');//получение адреса h2 по id
    div516.id = 'exchangetitle';//установка нового id
}
let button516 = document.getElementById('example516');
button516.addEventListener('click', example516);


// <!-- Задание 5.17. 
// Отследите когда все теги будут добавлены на страницу (событие
//   DOMContentLoaded) и выведите alert'ом сообщение: "все теги добавлены на страницу". -->

document.addEventListener('DOMContentLoaded', function () {
    alert('Задание 5.17: html загружен, возможно не загружены картинки или стили');
});


// <!-- Задание 5.18. 
// Дождитесь когда все картинки загрузятся (событие load) и
//    покажите с помощью alert сообщение: "все картинки загружены". -->
document.addEventListener('load', function () {
    alert('Задание 5.18: html загружен (всё загружено)');
});


// <!-- Задание 5.19. 
// Сделайте, чтобы по клику по кнопке с классом .btn появлялся alert('клик'). -->
function example519() {
    alert("Задание 5.19: кнопка с классом .btn нажата!")
}
let button519 = document.querySelector('.btn519');//получение адреса кнопки с классом btn519
button519.addEventListener('click', example519);


// <!-- Задание 5.20. 
// Сделайте, чтобы при наведении на textarea в консоли
// появлялось сообщение: "вы навели на textarea". -->
function example520() {
    console.log("Задание 5.20: вы навели мышью на область textarea!")
}
let button520 = document.querySelector('textarea');//получение адреса textarea
button520.addEventListener('mouseover', example520); // событие наведения мыши


// <!-- Задание 5.21. 
// 1. Сохраните в переменную коллекцию с картинками.
// 2. Пробегитесь по этой коллекции с помощью цикла или forEach
// и выведите каждую картинку в консоль. Выведите в консоль только
// элементы коллекции, не нужно пытаться сделать, чтобы в консоли появилось изображение. -->
function example521() {
    let div521 = document.querySelectorAll('div.exam521 img');//получение коллекции всех img в div с классом exam521
    div521.forEach(function (a) {//перебор сохранённой коллекции
        console.log(a);//вывод в консоль
    });
}
let button521 = document.getElementById('example521');
button521.addEventListener('click', example521);


// <!-- Задание 5.22.
// 1. Сохраните в переменную коллекцию элементов с классом one. Для получения
// элементов используйте метод .getElementsByClassName()
// 2. С помощью цикла переберите эту коллекцию и выведите в консоль название тега.    -->
function example522() {
    let div522 = document.getElementsByClassName('one522');//получение коллекции с классом one522
    for (let i = 0; i < div522.length; i++) { //перебор сохранённой коллекции
        console.log(div522[i].tagName); //вывод в консоль имён тегов сохранённой коллекции
    };
};
let button522 = document.getElementById('example522');
button522.addEventListener('click', example522);


// <!-- Задание 5.23.
// 1. Сохраните в переменную коллекцию с тегами h4, используйте метод getElementsByTagName()
// 2. Пробегитесь по этой коллекции с помощью цикла и выведите в консоль значение
// атрибута class, используя свойство className. -->
function example523() {
    let div523 = document.getElementsByTagName('h4');//получение коллекции тегов h4
    for (let i = 0; i < div523.length; i++) {
        console.log(div523[i].className);
    };
};
let button523 = document.getElementById('example523');
button523.addEventListener('click', example523);


// <!-- Задание 5.24.
// 1. Сохраните в переменную тег div.
// 2. Создайте переменную classes, и в нее сохраните значение свойства classList.
// 3. C помощью forEach переберите classes и выведите каждый класс в консоль. -->
function example524() {
    let div524 = document.getElementById('exam524');//получение div-а
    let classes = div524.classList //сохранение всех классов у div-а 
    for (let i = 0; i < classes.length; i++) { //перебор сохранных классов
        console.log(classes[i]); //вывод в консоль сохранных классов
    };
};
let button524 = document.getElementById('example524');
button524.addEventListener('click', example524);


// <!-- Задание 5.25.
// 1. Вам нужно получить этот div.
// 2. Затем обратитесь к списку классов и с помощью метода contains()
// проверьте есть ли класс hidden у этого тега. -->
function example525() {
    let div525 = document.getElementById('exam525');//получение div-а
    console.log(div525.classList.contains('hidden') + ` - у элемента есть класс 'hidden'`); //обращение к списку классов 
    // с последующим поиском нужного класса //true - значит класс hidden есть у данного элемента
};
let button525 = document.getElementById('example525');
button525.addEventListener('click', example525);


// <!-- Задание 5.26.
// 1. Найдите все "карточки" с классом .card.
// 2. Проверьте есть ли у карточки класс hidden с помощью метода contains(),
// и если есть, то удалите с помощью метода remove(). -->
function example526() {
    let div526 = document.getElementsByClassName('card526');//получение коллекции с классом card
    for (let i = 0; i < div526.length; i++) { //перебор коллекции
        if (div526[i].classList.contains('hidden')) { //поиск совпадений класса в каждом элементе коллекции
            div526[i].classList.remove('hidden');//удаление класса hidden при наличии
        };
    };
};
let button526 = document.getElementById('example526');
button526.addEventListener('click', example526);


// <!-- Задание 5.27.
// 1. Получите все ссылки.
// 2. Проверьте, есть ли в ссылке текст "ссылка", и если нет, то добавьте. -->
function example527() {
    let div527 = document.querySelectorAll('.exam527 a');//получение коллекции ссылок
    for (let i = 0; i < div527.length; i++) { //перебор коллекции
        if (div527[i].textContent !== 'ссылка') { //поиск совпадений текста в каждом элементе коллекции
            div527[i].innerText = 'ссылка';//добавление текста при отсутствии
        };
    };
};
let button527 = document.getElementById('example527');
button527.addEventListener('click', example527);


// <!-- Задание 5.28.
// 1. Получите все теги b.
// 2. С помощью метода contains() из classList, проверьте, есть ли у тега
// класс sign, и если нет, то тогда добавьте с помощью метода add()
function example528() {
    let div528 = document.querySelectorAll('.exam528 b');//получение коллекции внутри div с классом exam528 и с тегом b
    for (let i = 0; i < div528.length; i++) { //перебор коллекции
        if (div528[i].classList.contains('sign') == false) {//поиск совпадений класса sign в каждом элементе коллекции
            div528[i].classList.add('sign'); //добавление класса при отсутствии
        };
    };
};
let button528 = document.getElementById('example528');
button528.addEventListener('click', example528);


// <!-- Задание 5.29.
// 1. Получите коллекцию тегов i.
// 2. Пробегитесь по этой коллекции и с помощью classList.toggle() сделайте,
// чтобы где класс green есть, его не стало, а где нету, чтобы появился.
function example529() {
    let div529 = document.querySelectorAll('.exam529 i');//получение коллекции внутри div с классом exam529 и с тегом i
    for (let i = 0; i < div529.length; i++) { //перебор коллекции
        div529[i].classList.toggle('green'); //проверка на наличие класса и его добавление/удаление 
    };
};
let button529 = document.getElementById('example529');
button529.addEventListener('click', example529);


// <!-- Задание 5.30.
// 1. Получите кнопку и сохраните ее в переменную.
// 2. Назначьте кнопке обработку клика.
// 3. У функции-обработчика клика сделайте параметр event
// 4. При клике из event.target выведите в консоль: id, имя класса (используйте
// свойство className), текст на кнопке.
let button530 = document.getElementById('one530');//получение html element-а с классом one530
button530.addEventListener('click', function (event) { //назначение просмоторщика клика по html element-у и запуск функции
    console.log(`id = "${event.target.id}"!`, //вывод в консоль свойств html element-а
        `Класс = "${event.target.className}"!`,
        `Текст в кнопке = "${event.target.innerText}"!`);
});


// <!-- Задание 5.31.
// 1. Назначьте обработку клика по параграфу, у функции обработчика объявите
// параметр event.
// 2. При клике выведите в консоль event.target.classList
// 3. Переберите с помощью forEach event.target.classList и выведите каждый класс
// в консоль.
let paragraph531 = document.querySelector('.exam531 p'); //получение html element-а внутри div с классом exam531 и с тегом p
paragraph531.addEventListener('click', function (event) { //назначение просмоторщика клика по html element-у и запуск функции
    console.dir(`У параграфа имеются следующие классы: ${event.target.classList}`); //вывод содержимого массива classList у html element-а
    event.target.classList.forEach(function (itemClassList) {//перебор массива classList у html element-а
        console.log(itemClassList);//вывод по очереди в консоль содержимого каждого элемента массива classList у html element-а 
    });
});


// <!-- Задание 5.32.
// 1. Сохраните ссылку на div в переменную
// 2. Назначьте div'у обработку клика, у функции-обработчика объявите параметр event.
// 3. При клике из event.target c помощью getAttribute() получите значение
// каждого атрибута и выведите в консоль.
let div532 = document.querySelector('.exam532 div'); //получение html element-а внутри div с классом exam532 и с тегом div
div532.addEventListener('click', function (event) { //назначение просмоторщика клика по html element-у и запуск функции
    for (i = 0; i < event.target.attributes.length; i++) {//цикл для перебора массива attributes в html element-е
        console.log(event.target.getAttribute(event.target.attributes[i].name));//вывод значения атрибутов нашего div-а по именам атрибута, хранящихся в массиве attributes в html element-е
        // console.log(event.target.attributes[i].name);
    };
});

// <!-- Задание 5.33.
// 1. Сохраните в переменную ссылку на .product
// 2. Назначьте обработку клика по .product, у функции обработчика объявите
// параметр event.
// 3. Сделайте, чтобы при клике содержимое .product поменялось на:
// <div>Другой товар</div>
// <div>Другое описание</div>
// для этого вышеописанную разметку пишите в виде строки в innerHTML.
let div533 = document.querySelector('.exam533 div');//получение html element-а внутри div с классом exam533 и с тегом div
div533.addEventListener('click', function (event) {//назначение просмоторщика клика по html element-у и запуск функции
    event.target.innerHTML = '<div>Другой товар</div><div>Другое описание</div>'; //вставка нового содержимого innerHTML
});


// <!-- Задание 5.34.
// Назначьте обработчик клика по ul и при клике выводите в консоль элемент,
// на котором произошел клик, с помощью event.target, где event - это
// объект события, передаваемый в функцию-обработчик клика. -->
let div534 = document.querySelector('.exam534 ul');//получение html element-а внутри div с классом exam534 и с тегом ul
div534.addEventListener('click', function (event) {//назначение просмоторщика клика по html element-у и запуск функции
    console.log(event.target);//вывод в консоль элемента, на котором был клик
});


// <!-- Задание 5.35.
// Сделайте с помощью javascript размер шрифта в кнопке 30px,
// а в textarea сделайте зеленый фон. 
// Используйте свойство style у каждого из элементов. -->
function example535() {
    let div5351 = document.querySelector('.exam535 button');//получение html element-а внутри div с классом exam534 и тегом button
    div5351.style.fontSize = '32px'; //установка шрифта
    let div5352 = document.querySelector('.exam535 textarea');//получение html element-а внутри div с классом exam534 и тегом textarea
    div5352.style.backgroundColor = "green";//установка фона
};
let div535 = document.querySelector('.exam535');
div535.addEventListener('click', example535)