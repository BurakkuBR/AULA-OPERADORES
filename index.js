let kelvin = (77 - 32) * (5/9) + 273.15;
console.log("A temperatura em kelvin é: " + kelvin);

// b) Calcule e mostre o valor de 80ºC em ºF, mostrando a unidade no console também.

let fahrenheit = (80) * (9/5) + 32;
console.log ("A temperatura em celsius é: " + fahrenheit );

// c) Calcule e mostre o valor de 30ºC em ºF e K, mostrando a unidade no console também.

fahrenheit = (30) * (9/5) + 32;
kelvin = (fahrenheit - 32) * (5/9) + 273.15;
console.log("A temperatura em kelvin é: " + kelvin + " e a temperatura em fahrenheit é: " + fahrenheit); 

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let celsius = parseFloat(prompt("Insira o valor em celsius"));
fahrenheit = (celsius) * (9/5) + 32;
kelvin = (fahrenheit - 32) * (5/9) + 273.15;
console.log("A temperatura em kelvin é: " + kelvin + " e a temperatura em fahrenheit é: " + fahrenheit);

// Exercício extra:
// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quillowat-hora

let valorKillo = (280 * 0.05);
console.log("O total do boleto é: " + valorKillo + " reais");

// b) Altere o programa para receber mais um valor a porcentagem de desconto.
// Calcule e mostre o valor a ser pago pela mesma resiodencia acima considerando 15% de desconto

valorKillo = valorKillo * 0.85;
console.log("O total do boleto é: " + valorKillo + " reais");