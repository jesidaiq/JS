class Celular {
         constructor(color, peso, resolucion, camaraResolucion, memoriaRam) {
                  this.color = color;
                  this.peso = peso;
                  this.resolucion = resolucion;
                  this.camaraResolucion = camaraResolucion;
                  this.memoriaRam = memoriaRam;
                  this.encendido = false;
                  this.camara = false;
         }
         //Metodos de Celular 
         prender() {
                  if (this.encendido == false) {
                           this.encendido = true;
                           console.log(`Celular encendido 𖤓`);
                  } else {
                           console.log("El celular ya está encendido");
                  }
         }

         apagar() {
                  if (this.encendido == true) {
                           this.encendido = false;
                           console.log(`Celular apagado`);
                  } else {
                           console.log("El celular ya está apagado");
                  }
         }

         reiniciar() {
                  if (this.encendido == true) {
                           this.encendido = false; // apagar
                           this.encendido = true;  // prender nuevamente
                           console.log("Celular Reiniciado");
                  } else {
                           this.encendido = true;  // prender
                           console.log("Celular Prendido");
                  }
         }

         tomarFotos() {
                  if (this.camara == false) {
                           this.camara = true;
                           console.log(`Cámara habilitada, toque obturador para sacar fotos en ${this.camaraResolucion}`);
                  } else {
                           console.log(`Cámara ya habilitada, solo toque obturador para sacar fotos en ${this.camaraResolucion}`);
                  }
         }

         grabar() {
                  if (this.camara == false) {
                           this.camara = true;
                           console.log(`Cámara habilitada, haga clic en grabar`);
                  } else {
                           console.log(`Cámara ya habilitada, solo haga clic en grabar`);
                  }
         }

         //Getter para devolver informacion 
         get mostrarInformacion() {
                  return `El celular ${this.color} que pesa ${this.peso} y tiene una resolución de pantalla de ${this.resolucion}, de cámara ${this.camaraResolucion} y ${this.memoriaRam}GB de memoria RAM.`;
         }

         //Setter para cambiar  informacion 
         set setColor(newColor) {
                  this.color = newColor;
         }


         // Setter para cambiar el peso
         set setPeso(nuevoPeso) {
                  if (nuevoPeso <= 0) {
                           console.log("El peso no puede ser menor o igual a 0");
                  }
                  this.peso = nuevoPeso;
         }


         //Metodo statis para la clase Celular 
         static infoCelulares() {
                  return `  •••••••••••• Clase Celular ••••••••••••••• `;
         }
}


//Creacion de objetos de la clase Celular 
const celular1 = new Celular("Negro", "150g", "Full HD", "12 MP", "4 GB");
const celular2 = new Celular("Blanco", "160g", "HD", "16 MP", "6 GB");
const celular3 = new Celular("Rojo", "140g", "4K", "20 MP", "8 GB");

celular1.grabar();
celular2.reiniciar();
celular3.prender();
celular1.tomarFotos()
celular1.color = "Azul";
celular1.peso = 12
console.log(celular1) 
