'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let servicePrise1;
let service2;
let servicePrise2;
let allServicePrices;
let fullPrice;
let rollback;
let servicePercentPrice;

const isNumber = function (num){
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "верстка сайта");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
    do{
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while(!isNumber(screenPrice));
    adaptive = confirm("Нужен ли адаптив на сайте?");
    rollback = +prompt("Процент отката посреднику за работу", 11);
};

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let cost = 0;
        if (i ===0) {
            service1 = prompt("Какая нужна дополнительная услуга 1?"); 
        } else {
            service2 = prompt("Какая нужна дополнительная услуга 2?");
        }
        do {
            cost = prompt("Сколько будет стоить данная услуга?");
        } while(!isNumber(cost));
        sum += +cost;
        }
        return sum;
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrice();
getRollbackMessage();


console.log("allServicePrices", allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(title, typeof title);