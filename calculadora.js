// calculadora

var body = document.querySelector('body');
console.log(body);

var calculadora = document.getElementById('calculadora');
console.log(calculadora);

var number1Input = document.querySelector('.number1');
console.log(number1Input);

var number2Input = document.querySelector('.number2');
console.log(number2Input);

var boton = document.querySelector('.boton');
console.log(boton);

var mostrador = document.querySelector('.mostrador');
console.log(mostrador);

body.style.fontFamily = "Josefin Sans, sans-serif";
calculadora.style.textAlign = 'center';


function sumardosnumeros(){
    var number1 = parseInt(number1Input.value);
    var number2 = parseInt(number2Input.value);
    var resultadosuma = number1 + number2;
    mostrador.innerHTML = resultadosuma;

}
function restardosnumeros(){
    var number1 = parseInt(number1Input.value);
    var number2 = parseInt(number2Input.value);
    var resultadoresta = number1 - number2;
    mostrador.innerHTML = resultadoresta;
}
function multiplicardosnumeros(){
    var number1 = parseInt(number1Input.value);
    var number2 = parseInt(number2Input.value);
    var resultadomultiplicacion = number1 * number2;
    mostrador.innerHTML = resultadomultiplicacion;

}
function dividirdosnumeros(){
    var number1 = parseInt(number1Input.value);
    var number2 = parseInt(number2Input.value);
    var resultadodivision = number1 / number2;
    mostrador.innerHTML = resultadodivision;
}