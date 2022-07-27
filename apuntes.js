// alert("Calcula tu indice de masa corporal");

// let altura = parseInt(prompt("Ingresa tu estatura en cm"));
// alert("Tu altura es: " + altura + " cm");

// let peso = parseInt(prompt("Ingresa tu peso en kg");
// alert("Tu peso es: " + peso + " kg");

// alert("Tu indice de masa corporal es: " + peso / (altura * altura));

// let valor1 = parseInt(prompt("Ingrese un numero"));
// let valor2 = parseInt(prompt("Ingrese un numero"));

// console.log(valor1 + valor2);

// if (true){
//     console.log("mensaje");
// }

// let numero = parseInt(prompt("Ingrese el numero secreto"));
// const secreto = 8;
// let esNumero = !isNaN(numero);

// if (esNumero){
//     if (numero == secreto){
//         alert("Adivinaste!");
//     }else{
//         alert("Perdiste!");
//  let numero = parseInt(prompt("Ingrese el numero secreto"));
// const secreto = 8;
// let esNumero = !isNaN(numero);

// if (esNumero){
//     if (numero == secreto){
//         alert("Adivinaste!");
//     }else{
//         alert("Perdiste!");
//     }
// }

// alert("Para ingresar debes ser mayor de 18 años");
// let edad = parseInt(prompt("Cuantos años tienes?"));

// if (edad >= 18){
//     alert("Bienvenido al sitio");
// }else{
//     alert("Tienes menos de 18 años. Vuelve más adelante.");
// }

// let total = 0, cuenta = 1;

// while (cuenta <=10){
//     total += cuenta;
//     cuenta += 1;
// }

// console.log(total);

// let ingresarNumero = parseint(prompt("Ingresar un numero"));

// for (i=)

// let cant = parseInt(prompt("Ingrese la cantidad de alumnos"));
// let i;
// let nota;
// let sumatoria = 0;
// for (i = 1; i <= cant; i++){
//     nota = parseFloat(prompt("Ingrese la nota del alumno " + i));
//     sumatoria = sumatoria + nota;
// }

// let promedio = sumatoria / cant;

// alert(promedio);

// let num1, num2;

// do {
//     num1 = parseFloat(prompt("Ingrese un numero"));
// }while(isNaN(num1));

// Calculadora

// let resultado;

// let numero = parseFloat(prompt("Ingrese un numero"));

// if (!isNaN(numero)){
//     let numero2 = parseFloat(prompt("Ingrese un numero"));
//     if (!isNaN(numero2)){

//         let opcion = prompt("Ingrese una opcion: + - * /");
//         if (opcion == "+"){
//             resultado = numero + numero2;
//         }else if(opcion == "-"){
//             resultado = numero - numero2;
//         }else if(opcion == "*"){
//             resultado = numero * numero2;
//         }else if(opcion == "/"){
//             if(!(numero==0 && numero2==0)){
//                 resultado = numero / numero2;
//             }
//         }
//         alert(resultado);
//     }

// } else {
//     alert("No ingresaste un numero");
// }

// let resultado = 1;
// for (let contador = 1; contador <= 10; contador++) {
// resultado = resultado * 2;
// }
// console.log(resultado);


            // Clima
// switch (prompt("Como esta el clima?")) {
//     case "lluvioso":
//         console.log("Recuerda salir con un paraguas.");
//         break;
//     case "soleado":
//         console.log("Vistete con poca ropa.");
//     case "nublado":
//         console.log("Ve afuera.");
//         break;
//     default:
//     console.log("Tipo de clima desconocido!");
//         break;
//     }


            // Ejercicio triangulo
// for (let saludo = "o"; saludo.length <= 20; saludo = saludo += "o"){
//     console.log(saludo);
// }


            // Ejercicio Fizz Buzz
// for (let n = 1; n <=100; n++){
//     let output;
//     if (n % 3 == 0) output+="Fizz";
//     if (n % 5 == 0) output+="Buzz";
//     console.log(output || n);
// }


            // Ejercicio Ajedrez
// let size = 8;
// let board;

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// let numero;
// let sumatoria = 0;
// let mayor = -Infinity;
// let menor = Infinity;

// let n = parseInt(prompt("Ingrese la cantidad de numeros"));

// for (i=0; i<n; i++){
//   numero = parseInt(prompt("Ingrese un numero"));
//   sumatoria+=numero;
//   if (numero>mayor){
//     mayor=numero;
//   }
//   if (numero<menor){
//     menor=numero;
//   }

// }

// alert("El promedio es: " + sumatoria / n);
// alert("El menor numero es: " + menor);
// alert("El mayor numero es: " + mayor);

      // Sucesion de Fibonacci

// let cant = parseInt(prompt("Ingrese la cantidad de terminos que quiera ver: "));
// let pri = 0;
// let seg = 1;
// let sig;

// if (cant>0){
//   console.log(pri);
// }
// if (cant>1){
//   console.log(seg);
// }

// for (let i=3; i<=cant; i++){
//   sig = pri + seg;
//   console.log(sig);
//   pri = seg;
//   seg = sig;
// }

      // Función
// let cuadrado = function(x){
//   return x*x;
// }

// console.log(cuadrado(12));

// const potencia = function(base, exponente) {
//   let resultado = 1;
//   for (let cuenta = 0; cuenta < exponente; cuenta++) {
//   resultado *= base;
//   }
//   return resultado;
//   };
//   console.log(potencia(2, 10));
//   // → 1024

// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z);
// // → 60
// }
// // y no es visible desde aqui
// console.log(x + z);
// // → 40

// const potencia = (base, exponente) => {
//   let resultado = 1;
//   for (let cuenta = 0; cuenta < exponente; cuenta++) {
//   resultado *= base;
//   }

//   };

//   console.log(resultado);

// const cuadrado2 = x => x * x;
// console.log(cuadrado2(2));

// function saludar(quien) {
//   console.log("Hola " + quien);
// }
//   saludar("Harry");

// function suma (num1, num2){
//       return num1 + num2;
// }

// let suma1 = suma(5, 8);

// alert(suma1);


            //Arrays

// const arrayNotas = [10, 5, 8, 7, 5, 2, 8, 9];

// // for (let i = 0; i<arrayNotas.length; i++){
// //       console.log(arrayNotas[i]);
// // }

// // console.log(arrayNotas);

// // arrayNotas.push(3);

// // console.log(arrayNotas);

// // arrayNotas.push(prompt("Agregar nota:"));

// // console.log(arrayNotas);

// // let pop = arrayNotas.pop();

// // console.log(pop);

// const river = ["Armani", "Perez", "Romero"];
// const boca = ["Rossi", "Rojo", "Varela"];

// const equipos = river.concat(boca);

// // console.log(equipos);

// let slice = arrayNotas.slice(1, 4);

// // console.log(slice);


//             //Ejercicio notas con Array []

// function promedio(arrayDeNotas){
//       let sumatoria = 0;
      
//       for (let i = 0; i < arrayDeNotas.length; i++){
//             sumatoria += arrayDeNotas[i];
//       }

//       return sumatoria / arrayDeNotas.length;
// }

// function maximo(arrayDeNotas){
//       let maximo = arrayDeNotas[0];

//       for (let i = 0; i < arrayDeNotas.length; i++){
//             if (arrayDeNotas[i] > maximo) maximo = arrayDeNotas[i];
//       }

//       return maximo;
// }


// const notas = [];
// let nota;

// nota = parseInt(prompt("Ingrese una nota (-1 para terminar)"));

// while (nota != -1){
//       notas.push(nota);
//       nota = parseInt(prompt("Ingrese una nota (-1 para terminar)"));
// }

// console.log(notas);
// console.log(promedio(notas));
// console.log(maximo(notas));


// const datos = [];

// let ingresarNombre;
// let ingresarApellido;

// ingresarNombre = prompt("Ingresa tu nombre");
// ingresarApellido = prompt("Ingresa tu apellido:");

// datos.push(ingresarNombre, ingresarApellido);

// console.log(datos);