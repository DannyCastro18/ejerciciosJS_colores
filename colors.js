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

var p = document.querySelector('p');
console.log(p);

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