'use strict';

const isNumber = function (num){
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function playGame(number) {
    function compareNum() {
        const input = +prompt ("Угадай число от 1 до 100");
        console.log (number);
        console.log (input);
        
        if (!isNumber(input)) {
            alert("Введи число!");
            compareNum();
        } else if (input == 0) {
            alert("Игра окончена");
        } else if (input > number) {
            alert("Загаданное число меньше");
            compareNum();
        } else if (input < number) {
            alert("Загаданное число больше");
            compareNum();
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    }
    compareNum();
}
playGame(34);

