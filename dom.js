
//document.getElementById(id): Obtiene un elemento por su ID.

const titulo = document.getElementById('subt');
console.log ( titulo) //
console.log ( titulo.innerHTML) //muestra detalado el codigo html
console.log ( titulo.innerText) //texto del objeto 
console.log ( titulo.tagName) // devuelve el tipo de etiqueat 
console.log ( typeof titulo) //tipo de dato 

// document.querySelector(selector): Obtiene un elemento por un selector CSS. Algunos ejemplos de selectores que no requieren que los elementos sean descendientes:
/*
Selectores de hermanos adyacentes: h1 + p selecciona todos los párrafos que siguen inmediatamente a un encabezado h1.
Selectores de hermanos generales: h1 ~ p selecciona todos los párrafos que son hermanos de un encabezado h1, independientemente de su posición.
Selectores de ancestros: .clase .otra-clase selecciona todos los elementos con la clase otra-clase que son ancestros de un elemento con la clase clase.
Selectores de hijos: ul > li selecciona todos los elementos li que son hijos directos de un elemento ul.*/

const fru = document.querySelector('#contenedor #ul-frutas .fruta' ); 
console.log (fru)
//console.log (title.innerHTML) 


/*document.querySelectorAll(selector): Obtiene una lista de elementos por un selector CSS.  por mas que no sean descendientes directos */

const listFru = document.querySelectorAll ('p')
console.log (listFru)

const listFruN = document.querySelectorAll ('p:not(.p-a)' ) // los p que :not () que no tenga esto
console.log (listFruN)

const poemaM = document.querySelector('.poemaM');
console.log ('fondo rosa: ' + poemaM);
console.log(poemaM.style)  //contenido del style 
poemaM.style.backgroundColor = '#E3C3E5'; //cambio el style esde js
/**Los estilos desde el js tienen mas prioridad que en css porque son estilos en linea  https://codigofacilito.com/articulos/especificidad-css
 */





//acceso a textos 
const listaFrutas = document.getElementById ('ul-frutas');
console.log ('* ' + listaFrutas.innerText);
console.log ('* ' + listaFrutas.textContent); //muestra los espacios de identacion 
console.log ('* ' + listaFrutas.innerHTML); //muestra toda estrctura html 


//modific de textos
const liTres = document.querySelector( '.fruta-man') ;
console.log (liTres.innerHTML)
liTres.innerText = 'Mario Benedetti'; 
console.log (liTres.innerHTML)
liTres.classList.add('js-clase'); //asigno clases ya creadas
console.log (liTres.classList)
liTres.classList.remove ('fondo-celeste')
console.log (liTres.classList)




const fondoGris = document.getElementsByClassName('fruta');
      //   fondoGris.style.backgroundColor = `#C3D6E5` /**devuelve una colección HTML, no un solo elemento x lo que no se puede aplicar estilo,si se puede si lo recorro como array con for.*/

for (let i = 0; i < fondoGris.length; i++) {
    fondoGris[i].style.fontSize = '16px';
    fondoGris[i].style.color ='#gray'

}


//Modifico el primer li 
const liUno= document.querySelector ('.fruta-fr');
console.log (liUno);
liUno.innerText =  'Edgar Allan Poe ';  
console.log(liUno)




//atributos
const enlace = document.getElementsByClassName('a');
console.log ('- ' + enlace[0]);
console.log (enlace[0].getAttribute('href')) 
console.log (enlace[0]);
enlace[0].removeAttribute('href') //remueve atributo de a 
console.log ('Enlace removido' + enlace[0]);
console.log (enlace[0].setAttribute('href' , 'www.google.com.ar')) //atributo a modificar, como lo modifico
console.log (enlace[0]); 

const liCuarto = document.querySelector('.fruta-arandano');
console.log (liCuarto);
console.log (liCuarto.innerHTML);
console.log ( liCuarto.classList);
liCuarto.classList.add('js-claseDos');
console.log ( liCuarto.classList);
liCuarto.innerText ='Jorge Luis Borges';

         
         
const imgNeruda = document.getElementById('p-a-img'); //llamo la img
console.log (imgNeruda.getAttribute('src')) //devuelve el src
imgNeruda.setAttribute('src', 'neruda_2.jpg') // Cambio el src   
console.log (imgNeruda.getAttribute('src')) //devuelve el src
imgNeruda.setAttribute('width', '280px') // Cambio el width
console.log ('El width actual:  ' + imgNeruda.getAttribute('width')) //devuelve el src

         
         

console.log('**** Clases con JavaScript y el DOM *****') ;
console.log(liUno.innerHTML); 
console.log (liUno.classList) ;//me lista las clases del elemento 
liUno.classList.add('js-clase');
console.log (liUno.classList);
console.log (liUno.classList.contains('clase')) ;//verifico si contiene una clase 
liUno.classList.remove('fondo-celeste')
console.log (liUno.classList);



console.log('**** Crear elementos desde el DOM *****') ;
console.log (listaFrutas.innerHTML); //devuelvo la lista ya creada 
const desvelada = document.createElement ('li'); //creo el nuevo elemento
listaFrutas.append(desvelada);  //asigno a la lista, el nuevo elemento 
console.log (listaFrutas.innerHTML); //muestro nuevam la lista
desvelada.innerText = 'Gabriela Mistral'; 
console.log (desvelada.classList) //veo que clases tiene asignada 
desvelada.classList.add('js-clase', 'fruta', 'fruta-fr'); //asigno clases ya creadas

const borrar =document.createElement ('li')
listaFrutas.append(borrar); 
borrar.innerText='Borra de lista'
console.log ('Lista:  ' + listaFrutas.innerText); //muestro nuevam la lista
borrar.remove();  //borro el elemento
console.log ('Lista:  ' + listaFrutas.innerText);

 


const liDos = document.querySelector ('.fruta-ban')
console.log (liDos.innerHTML);
liDos.classList.add ('js-claseDos')
console.log (liDos.classList);
liDos.classList.remove('fruta-ban', 'fondo-rosa')
console.log (liDos.classList);


console.log (listaFrutas.parentElement) // devuelve el padre del elemento
console.log (listaFrutas.parentElement.parentElement) // devuelve el padre del padre del elemento



//Recorrer el DOM
console.log (listaFrutas.children) // devuelve los hijos del elemento 
console.log (listaFrutas.children[2]) // devuelve el  hijo nro n del elemento 

console.log (listaFrutas.firstChild) // devuelve el primer hijo del NODO (incluye espacios de identacion, comentarios)
console.log (listaFrutas.lastChild) // devuelve el primer hijo del elemento (si tiene espacio de identacion lo toma como texto)

console.log (listaFrutas.firstElementChild) // devuelve el primer hijo del elemento html sin contar los nodos 
console.log (listaFrutas.lastElementChild) // devuelve el primer hijo del elemento  html sin contar los nodos 


const subtituo = document.getElementById('subt');
console.log (subtituo.previousElementSibling); //hermano, mismo nivel anterior 
console.log (subtituo.nextElementSibling) //hermano, mismo nivel siguiente 

console.log (subtituo.previousSibling); //hermano, mismo nivel anterior del NODO (incluye espacios de identacion, comentarios)
console.log (subtituo.nextSibling) //hermano, mismo nivel siguiente  del NODO (incluye espacios de identacion, comentarios)


/*Funcion event handler */

function clic (apellido){
    console.log ('Elegiste a : ' + apellido)
}



/** Add event listener */
















































