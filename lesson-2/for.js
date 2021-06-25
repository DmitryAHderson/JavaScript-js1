/* №4. Реализовать основные 4 арифметические операции ( +, -, /, * ) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
*/

let n = parseInt(prompt("Введите число"));
let m = parseInt(prompt("Введите число"));

function plus(n, m) {
    return (n + m)
}
function min(n, m) {
    return (n - m)
};
function div(n, m) {
    return (n / m)
};
function mul(n, m) {
    return (n * m)
};