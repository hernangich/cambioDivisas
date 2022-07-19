
                //Variables globales
let pesoArg = 1;
let dolar = 280;
let euro = 300;
let real = 23;
let continuar;


                // Función de cambio
function cambioMoneda(){    
    let elegirMoneda = prompt("Elija la moneda que desea comprar:\n1- Dólar Americano\n2- Euro\n3- Real");

    if (elegirMoneda == 1){
    
          function cantDolar(){
            parseInt(prompt("Ingrese la cantidad de dólares que desea comprar: "));
          }

          let montoDolar = cantDolar();

            if (montoDolar > 0){
                  let cuenta = montoDolar*dolar;          
                  alert("El monto en pesos es: $ " + cuenta);
            }else{
                  alert("Ingrese un monto en números.");
                  cantDolar();
      }
    
    } else if (elegirMoneda == 2){
    
          let montoEuro = parseInt(prompt("Ingrese la cantidad de euros que desea comprar: "));
          let cuenta = montoEuro*euro;          
          alert("El monto en pesos es: $ " + cuenta);
    
    } else if (elegirMoneda == 3){
    
          let montoReal = parseInt(prompt("Ingrese la cantidad de reales que desea comprar: "));
          let cuenta = montoReal*real;          
          alert("El monto en pesos es: $ " + cuenta);
    
    } else {
          alert("Elija una de las opciones disponibles en el menú: ");
          cambioMoneda();
    }
}
    
do{
    cambioMoneda();
    continuar = prompt("Desea hacer otro cambio de moneda?\n1- Sí\n2- No");   
} while (continuar != 2);

if (continuar == 2){
    alert("Gracias! Lo esperamos en otro momento.");
}

