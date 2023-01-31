'use strict';

let title = "title";
let screens = 1;
let screenPrice = 2;
let rollback = 30.1;
let fullPrice = 11;
let adaptive = "adaptive";
alert ("Hello");
console.log ("Ok");

title = "The first project";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 100;
fullPrice = 500;
adaptive = true;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей"); 
console.log("Стоимость разработки сайта " + fullPrice + " рублей"); 
console.log(screens.toLowerCase(), screens.split(", "));
console.log("Процент отката посреднику за работу " + fullPrice*rollback/100);

title = prompt("Как называется ваш проект?", "Верстка сайта");
console.log(title);

screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
console.log(screens);

screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
console.log(screenPrice);
console.log(typeof screenPrice);

adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);
console.log(typeof adaptive);

let service1 = confirm("Нужна ли дополнительная услуга 1?");
console.log(service1);
console.log(typeof service1);

let servicePrice1 = +prompt("Сколько будет стоить данная услуга?", 1000);
console.log(servicePrice1);
console.log(typeof servicePrice1);

let service2 = confirm("Нужна ли дополнительная услуга 2?");
console.log(service2);
console.log(typeof service1);

let servicePrice2 = +prompt("Сколько будет стоить данная услуга?", 3000);
console.log(servicePrice2);
console.log(typeof servicePrice2);

fullPrice = screenPrice + service1*servicePrice1 + service2*servicePrice2;
console.log(fullPrice);

let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);

switch (true) {
    case fullPrice >= 30000:
        console.log ("Даем скидку в 10%");
        break
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log ("Даем скидку в 5%");
        break
    case fullPrice >= 0 && fullPrice < 15000:
        console.log ("Скидка не предусмотрена");
        break
    default:
        console.log ("Что то пошло не так");    
}

