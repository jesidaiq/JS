const botonCambiar = document.querySelector('#button-style');
const colorFondo = document.getElementById ('color') //este es el color que tiene asignado p para mostrar el texto

function generarColorRandom () {
         let digitos = '0123456789ABCDEF';
         let colorHex = '#'
         for (let i = 0 ;i <6 ; i++) {
                  let indiceAleatorio = Math.floor ( Math.random() * 16); 
                  colorHex = colorHex + digitos[indiceAleatorio];
         }
         return colorHex;
}

botonCambiar.addEventListener( 'click' , function () {
         let colorAleatorio = generarColorRandom();
         colorFondo.textContent = colorAleatorio; //asigno al parrafo este texto del color 
         document.body.style.backgroundColor = colorAleatorio;
});