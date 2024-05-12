console.log('Trabajando desde JS');

// capturar nodo
var body = document.querySelector('body');
console.log(body);

var color = document.getElementById('color');
console.log(color);

var contenedor = document.querySelector('.contenedor');
console.log(contenedor);

var article = document.querySelector('article');
console.log(article);

var conten = document.querySelector('.conten');
console.log(conten);

var p = document.querySelector('p');
console.log(p);

var nombres = document.querySelector('.nombres');
console.log(nombres);

var contenido = document.querySelector('.contenido');
console.log(contenido);

var boton = document.querySelector('.boton');
console.log(boton);

var lista = document.querySelector('.lista');
console.log(lista);


// Estilos
body.style.fontFamily = "Josefin Sans, sans-serif";
contenedor.style.border = '1px black solid';
contenedor.style.display = 'flex';
contenedor.style.padding = '5rem';
contenedor.style.alignItems = 'center';
contenedor.style.justifyContent ='space-between';
conten.style.display = 'flex';
conten.style.flexDirection = 'column';
conten.style.width = '20%';
article.style.border = '1px black solid';
article.style.borderRadius = '6px';
article.style.width = '30%';
article.style.width = '20rem';
article.style.height = '20rem';
article.style.fontSize = '5rem';
p.style.textAlign = 'center';
nombres.style.textAlign = 'center';
boton.style.margin = '1rem';
lista.style.width = '2rem'
lista.style.margin = '0 auto'


// administrar
morado.addEventListener('click',
    function mensaje (){
        console.log('Buscando color amarillo');
        body.style.backgroundColor = 'purple';
    }
)
verde.addEventListener('click',
    function mensaje (){
        console.log('Buscando color verde');
        body.style.backgroundColor = 'green';
    }
)
naranja.addEventListener('click',
    function mensaje (){
        console.log('Buscando color naranja');
        body.style.backgroundColor = 'orange';
    }
)
amarillo.addEventListener('click',
    function mensaje (){
        console.log('Buscando color amarillo');
       article.style.backgroundColor = 'yellow';
    }
)
azul.addEventListener('click',
    function mensaje (){
        console.log('Buscando color azul');
       article.style.backgroundColor = 'blue';
    }
)
rojo.addEventListener('click',
    function mensaje (){
        console.log('Buscando color rojo');
       article.style.backgroundColor = 'red';
        
    }
)
gris.addEventListener('click',
    function mensaje (){
        console.log('Buscando color gris');
       article.style.backgroundColor = 'grey';
    }
)
sinColor.addEventListener('click',
    function mensaje (){
        console.log('Buscando color sin color');
       article.style.backgroundColor = '';
    }
)


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

// calculadora

var number1Input = document.querySelector('.number1');
console.log(number1Input);

var number2Input = document.querySelector('.number2');
console.log(number2Input);

var boton = document.querySelector('.boton');
console.log(boton);

var mostrador = document.querySelector('.mostrador');
console.log(mostrador);

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

// Galeria
var galeria = document.querySelector('.galeria');

var carrito = document.querySelector('.carrito');

var modal = document.getElementById('modal');

var btnCerrar = document.querySelector('.btnCerrar');

var cards = document.querySelectorAll('.cards');

var img = document.querySelectorAll('.img');
console.log(img);

var titulo = document.querySelectorAll('.titulo');

var container = document.querySelector('.container');

var btn = document.querySelectorAll('.btn');

galeria.style.display = 'flex';
galeria.style.alignItems = 'center';
galeria.style.justifyContent ='space-between';
carrito.style.float = 'right';
function vermodal(){
    modal.style.display = 'block';
}
function cerrarmodal(){
    modal.style.display = 'none';
}

// estilos de las img
img.forEach(function(img){//El forEach simplifica el proceso de iteración
    img.style.width = '10rem';
    img.style.height = 'auto';
})

titulo.forEach(function(titulo){//El forEach simplifica el proceso de iteración
    titulo.style.fontSize = '20px'
})

// estilos de los botones
btn.forEach(function(btn){ //El forEach simplifica el proceso de iteración
    btn.style.backgroundColor = '#0a58ca';
    btn.style.textDecoration = 'none';
    btn.style.color = 'white';
    btn.style.borderRadius = '4px '
    btn.style.padding = '5px '
})

cards.forEach(function(cards){//El forEach simplifica el proceso de iteración (All)
    cards.style.width = '12rem';
    cards.style.margin = '1rem'
    cards.style.backgroundColor = 'white'
    cards.style.padding = '8px'
    cards.style.border = '1px solid black';
    cards.style.borderRadius = '5px ';
})


// estilos
container.style.display ='flex';
container.style.flex ='wrap';


// administrar
card1.addEventListener('click',
    function agregarcarrito (){
        console.log('Agregando al carrito');
    }
)
card1.appendChild();

carrito.addEventListener('click', vermodal );
btnCerrar.addEventListener('click', cerrarmodal);



