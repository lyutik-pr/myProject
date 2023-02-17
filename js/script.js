'use strict';
const title = document.getElementsByTagName('h1')[0];
const buttonStart = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];
const btn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const range1 = document.querySelector('.rollback > div > [type="range"]');
const range2 = document.querySelector('.rollback > div > [class="range-value"]');
const total = document.getElementsByClassName('total-input')[0];
const totaCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollBack = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
   title: '',
   screens: [],
   screenPrice: 0,
   screenNumber: 0,
   adaptive: true,
   servicesPercent: {},
   servicesNumber: {},
   servicePricesPercent: 0,
   servicePricesNumber: 0,
   fullPrice: 0,
   rollback: 10,
   servicePercentPrice: 0,
   init: function(){
     appData.addTitle();   
     buttonStart.addEventListener('click', appData.start); 
     btn.addEventListener('click', appData.addScreenBlock);
     range1.addEventListener('input', appData.logger1);
   },
   addTitle: function(){
       console.log(title.textContent);
       document.title = title.textContent;
   },
   addScreens: function(){
    screens = document.querySelectorAll('.screen');//переопределяем коллекцию
    screens.forEach(function(screen, index){
         const select = screen.querySelector('select');
         const input = screen.querySelector('input');
         const selectName = select.options[select.selectedIndex].textContent;
         const countScreen = input.value;
         appData.screens.push({
             id: index, 
             name: selectName, 
             price: +select.value * +input.value,
             count: countScreen,
            });
     });
     console.log(appData.screens);
    },

    addServices: function(){
      otherItemsPercent.forEach(function(item){
          const check = item.querySelector('input[type=checkbox]');
          const label = item.querySelector('label');
          const input = item.querySelector('input[type=text]');
          if(check.checked){
              appData.servicesPercent[label.textContent] = +input.value;
          }

      });
      otherItemsNumber.forEach(function(item){
        const check = item.querySelector('input[type=checkbox]');
        const label = item.querySelector('label');
        const input = item.querySelector('input[type=text]');
        if(check.checked){
            appData.servicesNumber[label.textContent] = +input.value;
        }
    });
    },

     addScreenBlock: function(){
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length -1].after(cloneScreen); //выпадающтй список по клику на плюсик
    },
   start: function(){
    appData.addScreens();
    appData.addServices();

    appData.addPrices();

    appData.addRollBack();
    appData.showResult();
},
    showResult: function(){
        if (appData.screenPrice <=0){
            alert('input');
        }else {    
      total.value = appData.screenPrice;
      totaCount.value = appData.screenNumber;
      totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
      fullTotalCount.value = appData.fullPrice;
      totalCountRollBack.value = appData.servicePercentPrice;
    }
    },
    addPrices: function () {
      for (let screen of appData.screens) {
        appData.screenPrice += +screen.price;
        appData.screenNumber += +screen.count;
      } 
      for (let key in appData.servicesNumber) {
        appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
        appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback / 100));
},
    addRollBack: function(){
          appData.rollback = range2.value;
          console.log(appData.rollback);
    },

   showTypeOf: function(variable){
    console.log(variable, typeof variable);
},
   
};

appData.logger1 = function (event) {
    let text = event.target.value + '%';
    let num = +event.target.value;
    range2.textContent = text;
    range2.value = num;
  };

appData.init();

