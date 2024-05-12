var body = document.querySelector('body');
console.log(body);

var nombres = document.querySelector('.nombres');
console.log(nombres);

var contenido = document.querySelector('.contenido');
console.log(contenido);

var boton = document.querySelector('.boton');
console.log(boton);

var lista = document.querySelector('.lista');
console.log(lista);

body.style.fontFamily = "Josefin Sans, sans-serif";
nombres.style.margin = 'auto 0'
nombres.style.textAlign = 'center';
boton.style.margin = '1rem';
lista.style.width = '2rem'
lista.style.margin = '0 auto'


boton.addEventListener('click', function(){
    // para obtener el nombre 
    let nombre = contenido.value

    // para crear el li
    let li = document.createElement('li');

    // pone el nombre ingresado en li
    li.textContent = nombre;

    // agrega el nombre ingresado a la lista
    lista.appendChild(li);
    contenido.value = ''
    }
)