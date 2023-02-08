'use strict';

const appData = {
   title: '',
   screens: '',
   screenPrice: 0,
   adaptive: true,
   service1: '',
   servicePrise1: 0,
   service2: '',
   servicePrise2: 0,
   allServicePrices: 0,
   fullPrice: 0,
   rollback: 10,
   servicePercentPrice: 0,
   isNumber: function (num){
    return !isNaN(parseFloat(num)) && isFinite(num);
},
   asking: function () {
    appData.title = prompt("Как называется ваш проект?", "верстка сайта");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
    do{
        appData.screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while(!appData.isNumber(appData.screenPrice));
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    appData.rollback = +prompt("Процент отката посреднику за работу");
},
   getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let cost = 0;
        if (i ===0) {
            appData.service1 = prompt("Какая нужна дополнительная услуга 1?"); 
        } else {
            appData.service2 = prompt("Какая нужна дополнительная услуга 2?");
        }
        do {
            cost = prompt("Сколько будет стоить данная услуга?");
        } while(!appData.isNumber(cost));
        sum += +cost;
        }
        return sum;
},
   getFullPrice: function() {
    return appData.screenPrice + appData.allServicePrices;
},
   getTitle: function() {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
},
   getServicePercentPrice: function() {
    return Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback / 100));
},
   showTypeOf: function(variable){
    console.log(variable, typeof variable);
},
   getRollbackMessage: function(){
    switch (true) {
        case appData.fullPrice >= 30000:
            console.log("Даем скидку в 10%");
            break;
        case appData.fullPrice >= 15000:
            console.log("Даем скидку в 5%");
            break;
        case appData.fullPrice >= 0:
            console.log("Скидка не предусмотрена");
            break;
        default:
            console.log("Что то пошло не так");
    }
},
};

appData.logger = function(){
    for (let key in appData) {
        console.log('ключ:' + key + '  ' + appData[key]);
    }
};
appData.start = function(){
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.title = appData.getTitle();
    appData.servicePercentPrice = appData.getServicePercentPrice();
    appData.logger();
};

appData.start();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);