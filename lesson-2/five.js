'use strict'

/*5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических 
операций
(использовать функции из задания 4) и вернуть полученное значение. */
let arg1 = parseInt(prompt('Число один: '));

let arg2 = parseInt(prompt('Число два: '));

let operation = prompt('введите операцию(plus,min,div,mul): ');

function mathOperation(arg1, arg2, operation) {
    let result;
    function plus(arg1, arg2) {
        return (arg1 + arg2)
    };
    function min(arg1, arg2) {
        return (arg1 - arg2)
    };
    function div(arg1, arg2) {
        return (arg1 / arg2)
    };
    function mul(arg1, arg2) {
        return (arg1 * arg2)
    };

    switch (operation) {
        case plus: {
            result = plus(arg1, arg2)
        };
            break;
        case min: {
            result = min(arg1, arg2)
        };
            break;
        case div: {
            result = div(arg1, arg2)
        };
            break;
        case mul: {
            result = mul(arg1, arg2)
        };
            break;
    }
    return result;

}

alert(mathOperation(arg1, arg2, operation))