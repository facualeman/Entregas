/// Solicita a usuario ingresar presupuesto

let presupuesto = parseFloat(prompt("Por favor ingresa tu presupuesto"))
console.log("Presupuesto " + " " + presupuesto);
alert("El presupuesto ingresado es" + " " + presupuesto )
alert("Ahora puedes cargar tus gastos")

/// Solicita ingresar gasto diarios

let gastoTransporte = parseFloat(prompt("Ingresar gastos de Transporte"))
console.log('gasto ingresado' + ' ' + gastoTransporte);
alert('El gasto fue ingresado con exito')

let gastoComida = parseFloat(prompt("Ingresar gastos de Comida"))
console.log('gasto ingresado' + ' ' + gastoComida);

let gastoHospedaje = parseFloat(prompt("Ingresar gastos de Hospedaje"))
console.log('gasto ingresado' + ' ' + gastoHospedaje);

let gastoVarios = parseFloat(prompt("Ingrese otros gastos varios como ser excursiones, regalos, etc"))
console.log('gasto ingresado' + ' ' + gastoVarios);

//// Suma gastos
let gastoTotal = gastoTransporte + gastoHospedaje + gastoComida + gastoVarios

//// Presupuesto restante
let restoPresupuesto = presupuesto - gastoTotal

/// Saca porcentajes 
let restoAlto= presupuesto * 0.70;
console.log("Resto %70" + " " + restoAlto); 

let restoMedio= presupuesto * 0.50;
console.log("Resto 50%" + " " + restoMedio); 


let restoBajo= presupuesto * 0.25;
console.log("Resto 25%" + " " + restoBajo); 

alert("Su gasto total es" + " " + gastoTotal)
console.log("Su gasto total es" + " " + gastoTotal)
alert("Su presupuesto actual es " + " " + restoPresupuesto)
console.log("Su presupuesto actual es " + " " + restoPresupuesto)


if (restoPresupuesto > restoAlto) {
    alert("Todavia tenes suficiente dinero para dilapidar. Gastos acumulados: " + gastoTotal + ". " + "Presupuesto restante" + " " + restoPresupuesto)
    
} else if (restoPresupuesto >= restoMedio && restoPresupuesto <= restoAlto ){
    alert("Aun cuenta con dinero suficiente  Gastos acumulados: " + gastoTotal + ". " + "Presupuesto restante" + " " + restoPresupuesto)
    
} else if (restoPresupuesto >= restoBajo && restoPresupuesto < restoMedio)
alert("todavia tiene dinero pero esta gastanto mucho.  Gastos acumulados: " + gastoTotal + ". " + "Presupuesto restante" + " " + restoPresupuesto) 

else if (restoPresupuesto < restoBajo && restoPresupuesto > 0) {
    alert ("Le queda poco dinero, trate de reducir gastos. Gastos acumulados: " + gastoTotal + ". " + "Presupuesto restante" + " " + restoPresupuesto)
}

else {
    alert("Saldo insuficiente, se ha excedido en consumos. Saldo deudor :" + " " + restoPresupuesto)
}















//  let nuevoGasto = prompt('Desea ingresar un nuevo gasto? Si / No ')

//  if (nuevoGasto == "Si") {

//     let gasto2 = parseFloat(prompt('Ingrese nuevo gasto'))
    
// } else {

//     let saldo = presupuesto - gasto
//     alert(" Su actual respuesto es" + " " + saldo)
// }
 



















// let nombre = "Homero";
// let apellido = "Simpsons";
// let edad = 39;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

// const ciudad1 = "Buenos Aires";
// const ciudad2 = "Bogota";
// const ciudad3 = "Lima";
// const ciudad4 = "Montevideo";
// const ciudad5 = "Rio de Janeiro";

// console.log(ciudad1);
// console.log(ciudad2);
// console.log(ciudad3);
// console.log(ciudad4);
// console.log(ciudad5);

// //// carnet conducir

// let nombreCarnet = "Bart"
// let edadCarnet = 18
// let direccionCarnet = "Av. Rivadavia 123"

// let carnet = "Nombre: " + nombreCarnet + " " + "Edad: " + edadCarnet + " " + "Direccion: " + direccionCarnet
// console.log(carnet);


//// registro de personas

//let nombreFamiliar1 = prompt("Ingrese el nombre de los integrantes de la familia");
//let nombreFamiliar2 = prompt("Ingrese el nombre de los integrantes de la familia");
//let nombreFamiliar3 = prompt("Ingrese el nombre de los integrantes de la familia");
//let nombreFamiliar4 = prompt("Ingrese el nombre de los integrantes de la familia");
//let nombreFamiliar5 = prompt("Ingrese el nombre de los integrantes de la familia");

//let familiares = nombreFamiliar1 + " " +
//                nombreFamiliar2 + " " +   
//                nombreFamiliar3 + " " +
//                nombreFamiliar4 + " " +
//                nombreFamiliar5;
//console.log(familiares);
//alert("Sus familiares son: " + familiares);  


//// Descuentos actividad 5

// let precio = parseFloat(prompt("Ingrese el precio del producto"));
// let descuento = precio - (precio * 0.2)

// console.log(descuento);

// alert("Precio final con descuento: " + descuento)


///// Ejecicio 5 Yo no fui

// let ingresoNombre = prompt("Ingrese su nombre")
// let nombre = "Facundo"

// if (ingresoNombre == nombre) { console.log("Fui yo");
    
// } else {console.log("Yo no fui"
// );
    
// }

//// Actividad 2

///y Y y

// let ingresetecla = prompt("presione una tecla")
// let tecla1 = "Y"
// let tecla2 = "y"

// if (ingresetecla == tecla1 || ingresetecla == tecla2) 
// {
//     alert("ingreso correcto")
// } else {
//     alert("Ingreso incorrecto!!!")
// }


// ///// Actividad 3 
// ///escoger personaje

// let ingreseNumero = prompt("Ingrese numero de personaje")

// let personaje1 = "Homero"
// let personaje2 = "Marge"
// let personaje3 = "Lisa"
// let personaje4 = "Bart"

// if (ingreseNumero == 1 ) {
//     console.log("Tu personaje es Homero");
    
// } else if  
// ( ingreseNumero == 2) {console.log("Elegiste a Marge")}
//  else if 
//  (ingreseNumero == 3) {console.log("Elegiste a Lisa")}
//  else if 
//  (ingreseNumero == 4) {console.log("Elegiste a Bart")}

//  else {console.log("Error");}
    
 /////Actividad 4

 /// Presupuesto

//  let presupuesto = prompt("Ingrese su presupuesto")

//  if (presupuesto < 100) { console.log("Su presupuesto es bajo")
    
//  } else if (presupuesto >= 99 && presupuesto < 300) 
//   { console.log("Su presupuesto es medio")}
// else if (presupuesto >= 300)
// {console.log("Presupuesto alto");}

// else{console.log("Presupuesto incorrecto");}

////Actividad 5

// let producto1 = prompt('INGRESAR 1er PRODUCTO');
// let producto2 = prompt('INGRESAR 2do PRODUCTO');
// let producto3 = prompt('INGRESAR 3er PRODUCTO');
// let producto4 = prompt('INGRESAR 4to PRODUCTO');

// if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
//     let heladera = "1) " + producto1 + " " +
//         "2) " + producto2 + " " +
//         "3) " + producto3 + " " +
//         "4) " + producto4;
//     console.log(heladera);
// } else {
//     console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
// }


/// Actividad 2
/// El pizzarron

// let letra = prompt("Ingrese TEXTO")
// let numero = parseFloat(prompt("Ingrese numero"))
// for (let index = 0; index < numero; index++) {
//     alert("TEXTO ingresada" + " "+ letra)
    
// }


/// ACTIVIDAD 3

/// Cuadrado ordinario 

// let numero = parseInt(prompt("Ingrese numero"))
// for (let index = 0; index < numero ; index++) {
    
//     if (numero > 3) {
//         break;
        
//     }
    
//     alert("LADO" + " " + numero)
    
// }











