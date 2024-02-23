let seguir;

do {
         let operacion = parseInt(prompt("¿Qué operación deseas realizar?\n1: suma \n 2: resta \n 3: multiplicación \n 4: división \n 5 : Raiz cuadrada \n 6: Raiz cubica \n 7: Potencia \n"));

         switch (operacion) {
                  case 1:
                           let a = parseInt(prompt("Ingrese el primer número"));
                           let b = parseInt(prompt("Ingrese el segundo número"));
                           let res = a + b;
                           alert("El resultado es: " + res);
                           break;
                  case 2:
                           let aR = parseInt(prompt("Ingrese el primer número"));
                           let bR = parseInt(prompt("Ingrese el segundo número"));
                           let resR = aR - bR;
                           alert("El resultado es: " + resR);
                           break;
                  case 3:
                           let aM = parseInt(prompt("Ingrese el primer número"));
                           let bM = parseInt(prompt("Ingrese el segundo número"));
                           let resM = aM * bM;
                           alert("El resultado es: " + resM);
                           break;
                  case 4:
                           let aaDiv = parseInt(prompt("Ingrese el primer número"));
                           let bbDiv = parseInt(prompt("Ingrese el segundo número"));
                           let ressDiv = aaDiv / bbDiv;
                           alert("El resultado es: " + ressDiv);
                           break;
                  case 5:
                           let aRazi = parseInt(prompt("Ingrese el número para raiz cuadrada"));
                           let aRaziC = Math.sqrt(aRazi);
                           alert("La raiz es cuadrada de " + aRazi + " es : " + aRaziC);
                           break;
                  case 6:
                           let aRaizCu = parseInt(prompt("Ingrese el número para raiz cubica"));
                           let aRaizCuT = Math.cbrt(aRaizCu);
                           alert("La raiz es cubica  de " + aRaizCu + " es : " + aRaizCuT);
                           break;
                  case 7:
                           let aPotencia = parseInt(prompt("Ingrese la base de la potencia: "));
                           let bPotencia = parseInt(prompt("Ingrese el exponente a elevar la base: "));
                           let  aPotenciaAB = Math.pow(aPotencia , bPotencia);
                           alert( aPotencia + " elevado a " + bPotencia + " es " +  aPotenciaAB);
                           break;
                  default:
                           alert("Operación no válida");
         }
         //ahora entra a la condición 
         seguir = prompt("¿Desea seguir operando? Ingrese 'S' para continuar o cualquier otra tecla para salir.");
} while (seguir && seguir.toUpperCase() === "S"); //mientras esto sea true, vuelve a hacer 







