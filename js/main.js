// const usuario1 = [];

// let inicio;



//                         // Ingreso usuario
// entrada();

// function entrada(){
//       let inicio = parseInt(prompt("1- Iniciar sesión\n2- Crear usuario"));

//       if (inicio == 1){
//             prompt("Ingresa tu nombre de usuario: ");
//             prompt("Ingresa tu contraseña: ");

//             cambioMoneda();

//       } else if (inicio == 2){
//             let nuevoNombreUsuario = prompt("Ingresa un nombre de usuario:");
//             let nuevaContraseña = prompt("Ingresa una contraseña:");
//             let edad = prompt("Ingresa tu edad: ");
//             let pais = prompt("Ingresa tu país: ");
//             let email = prompt("Ingresa tu e-mail: ");
//             let telefono = prompt("Ingresa un número de teléfono: ");

//             usuario1.push(nuevoNombreUsuario, nuevaContraseña, edad, pais, email, telefono);

//             cambioMoneda();          

//       }else{
//             alert("Elija una de las opciones disponibles en el menú: ");
//             entrada();
//       }
// }

//                         // Comprar moneda
// function cambioMoneda(){

//       let pesoArg = 1;
//       let dolar = 280;
//       let euro = 300;
//       let real = 23;

//       let elegirMoneda = parseInt(prompt("Elija la moneda que desea comprar:\n1- Dólar Americano\n2- Euro\n3- Real"));

//       if (elegirMoneda == 1){
      
//             let monto = parseInt(prompt("Ingrese la cantidad de dólares que desea comprar: "));
//             let resultado = monto*dolar;          
//             alert("El monto en pesos es: $ " + resultado);

//             continuar();
      
//       } else if (elegirMoneda == 2){
      
//             let monto = parseInt(prompt("Ingrese la cantidad de euros que desea comprar: "));
//             let resultado = monto*euro;          
//             alert("El monto en pesos es: $ " + resultado);

//             continuar();
      
//       } else if (elegirMoneda == 3){
      
//             let monto = parseInt(prompt("Ingrese la cantidad de reales que desea comprar: "));
//             let resultado = monto*real;          
//             alert("El monto en pesos es: $ " + resultado);

//             continuar();
      
//       } else {
//             alert("Elija una de las opciones disponibles en el menú: ");
//             cambioMoneda();
//       }
// }

//                         // Continuar
// function continuar(){
//     let continuar = prompt("Desea hacer otro cambio de moneda?\n1- Sí\n2- No");
//     if (continuar == 1){
//         cambioMoneda();

//     }else if(continuar == 2){
//         alert("Gracias! Lo esperamos en otro momento.");

//     }else{
//         continuar();
//     }
// } 

let boton = document.getElementById("botonNueva")

boton.onclick = () => {
      alert("Declaro ser mayor de edad para poder operar con MonedApp");
}






