'use strict';
const title = document.getElementsByTagName('h1');
console.log(title[0]);

const buttons = document.getElementsByClassName('handler_btn');
console.log(buttons);

const btn = document.querySelector('.screen-btn');
console.log(btn);

const otherItemsPercent = document.querySelectorAll('.other-items.percent');
console.log(otherItemsPercent);

const otherItemsNumber = document.querySelectorAll('.other-items.number');
console.log(otherItemsNumber);

const range1 = document.querySelector('.rollback > div > [type="range"]');
console.log(range1);

const range2 = document.querySelector('.rollback > div > [class="range-value"]');
console.log(range2);

const totalInput = document.getElementsByClassName('total-input');
console.log(totalInput.length);

for (let i = 0; i < totalInput.length; i++) {
    console.log(totalInput[i]);
  } 

let screen1 = document.querySelectorAll('.screen');
console.log(screen1.length);

for (let i = 0; i < screen1.length; i++) {
    console.log(screen1[i]);
  }

const appData = {
   title: '',
   screens: [],
   screenPrice: 0,
   adaptive: true,
   services: {},
   allServicePrices: 0,
   fullPrice: 0,
   rollback: 10,
   servicePercentPrice: 0,
   isNumber: function (num){
    return !isNaN(parseFloat(num)) && isFinite(num);
},
   asking: function () {
       let name;
    do{
        name = prompt("Как называется ваш проект?");
    } while(appData.isNumber(name));   
    appData.title = name;
  
    for (let i = 0; i < 2; i++) {
        let name;
        do{
            name = prompt("Какие типы экранов нужно разработать?");
        } while(appData.isNumber(name));   
        let cost = 0;
        do{
            cost = +prompt("Сколько будет стоить данная работа?");
        } while(!appData.isNumber(cost));
        appData.screens.push({id: i, name: name, cost: cost});
    }

    for (let i = 0; i < 2; i++) {
        let name;
        do{
            name = prompt("Какая нужна дополнительная услуга?");
        } while(appData.isNumber(name));
        let cost = 0;
        do {
            cost = prompt("Сколько будет стоить данная услуга?");
        } while(!appData.isNumber(cost));
        appData.services[name] = +cost;
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    appData.rollback = +prompt("Процент отката посреднику за работу");
},
    
    addPrices: function () {
      for (let screen of appData.screens) {
        appData.screenPrice += +screen.cost;
      } 
      for (let key in appData.services) {
        appData.allServicePrices += appData.services[key];
    }
},
   getFullPrice: function() {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
},
   getTitle: function() {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
},
   getServicePercentPrice: function() {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback / 100));
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
        console.log(appData.screens);

    }
};
appData.start = function(){
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getTitle();
    appData.getServicePercentPrice();
    appData.logger();
};

appData.start();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
console.log(appData.servicePercentPrice);