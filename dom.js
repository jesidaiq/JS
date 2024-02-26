
//document.getElementById(id): Obtiene un elemento por su ID.

const titulo = document.getElementById("subt");
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

const fru = document.querySelector("#contenedor #ul-frutas .fruta" ); 
console.log (fru)
//console.log (title.innerHTML) 


/*document.querySelectorAll(selector): Obtiene una lista de elementos por un selector CSS.  por mas que no sean descendientes directos */

const listFru = document.querySelectorAll ("p")
console.log (listFru)


const listFruN = document.querySelectorAll ("p:not(.p-a)" ) // los p que :not () que no tenga esto
console.log (listFruN)

const fondoRosa = document.querySelector(".fondo-rosa");
console.log ("fondo rosa: " + fondoRosa);
console.log(fondoRosa.style)  //contenido del style 
fondoRosa.style.backgroundColor = '#E3C3E5'; //cambio el style esde js
/**Los estilos desde el js tienen mas prioridad que en css porque son estilos en linea  https://codigofacilito.com/articulos/especificidad-css
 */

//acceso a textos 
const listaFrutas = document.getElementById ('ul-frutas');
console.log ('* ' + listaFrutas.innerText);
console.log ('* ' + listaFrutas.textContent); //muestra los espacios de identacion 
console.log ('* ' + listaFrutas.innerHTML); //muestra toda estrctura html 



//modific de textos
const lineaTres = document.querySelector( '.fruta-man') ;
console.log (lineaTres.innerHTML)
lineaTres.innerText = '🩶 Mario Benedetti'; 
console.log (lineaTres.innerHTML)
lineaTres.style.backgroundColor = `#C3D6E5` 



const fondoGris = document.getElementsByClassName("fruta");
      //   fondoGris.style.backgroundColor = `#C3D6E5` /**devuelve una colección HTML, no un solo elemento x lo que no se puede aplicar estilo,si se puede si lo recorro como array con for.*/

for (let i = 0; i < fondoGris.length; i++) {
    fondoGris[i].style.backgroundColor = `#C3D6E5`;
    fondoGris[i].style.fontSize = "16px";

}


//Modifico el primer li 
const primerLi= document.querySelector (".fruta-fr");
console.log (primerLi);
primerLi.innerText =  'Edgar Allan Poe ';  
console.log(primerLi)




//atributos
const enlace = document.getElementsByClassName("a");
console.log ("- " + enlace[0]);
console.log (enlace[0].getAttribute("href")) 
console.log (enlace[0]);
enlace[0].removeAttribute("href") //remueve atributo de a 
console.log ("Enlace removido" + enlace[0]);
console.log (enlace[0].setAttribute("href" , "www.google.com.ar")) //atributo a modificar, como lo modifico
console.log (enlace[0]); 

const cuartoLi = document.getElementsByClassName("fruta-arandano");
console.log (cuartoLi);
console.log (cuartoLi[0].innerHTML);
console.log (cuartoLi[0].getAttribute("li")) 

         
         
const imgNeruda = document.getElementById("p-a-img"); //llamo la img
console.log (imgNeruda.getAttribute("src")) //devuelve el src
imgNeruda.setAttribute("src", "neruda_2.jpg") // Cambio el src   
console.log (imgNeruda.getAttribute("src")) //devuelve el src
imgNeruda.setAttribute("width", "280px") // Cambio el width
console.log ("El width actual:  " + imgNeruda.getAttribute("width")) //devuelve el src

         
         



         
         
 

