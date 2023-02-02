'use strict';

let title = prompt("Как называется ваш проект?", "Верстка сайта");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = confirm("Нужна ли дополнительная услуга 1?");
let servicePrice1 = +prompt("Сколько будет стоить данная услуга?", 1000);
let service2 = confirm("Нужна ли дополнительная услуга 2?");
let servicePrice2 = +prompt("Сколько будет стоить данная услуга?", 3000);
let allServicePrices;
let fullPrice;
let rollback = +prompt("Процент отката посреднику за работу", 11);
let servicePercentPrice;
let rollbackMessage;

const getAllServicePrices = function () {
    return service1 * servicePrice1 + service2 * servicePrice2;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const getServicePercentPrice = function() {
    return Math.ceil(fullPrice - (fullPrice * rollback / 100));
};

const showTypeOf = function(variable){
    console.log(variable, typeof variable);
};

const getRollbackMessage = function(){
    switch (true) {
        case fullPrice >= 30000:
            console.log("Даем скидку в 10%");
            break;
        case fullPrice >= 15000:
            console.log("Даем скидку в 5%");
            break;
        case fullPrice >= 0:
            console.log("Скидка не предусмотрена");
            break;
        default:
            console.log("Что то пошло не так");
    }
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrice();
rollbackMessage = getRollbackMessage();



console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(typeof title);