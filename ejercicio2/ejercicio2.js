// var,let y const 

// la primera diferencia con var y let es que let no se puede reinicializar, aunque si se puede cambiar su valor//

let edad = 18;

edad = 19;
console.log(edad);

// otra de las diferencias  es que con let lo que declaremos con let, vivira dentro de un ambiente, cuando salga de este ambiente devolvera un error, como en el siguiente ejemplo:




for (let i = 0; i < 5; i++) {
    console.log(i);
}
//console.log(i);

//pero dejemos claro algo como let funciona por ambiente pues si se puede declarar un let dos veces pero en diferentes ambientes como veras a continuacion:

let j = 50;

for (let j = 0; j < 5; j++) {
    console.log(j);
}
console.log(j);

//otro ejemplo:

let otronumero = 40;
if (true) {
    let otronumero = 50;
    console.log('dentro del if' +
        otronumero);
}
console.log(otronumero);

//CONST; ¿COMO FUNCIONA?
//a las const debe asignarse un valor. para que funcione
// las constantes se pueden declarar solo una ves, y tampoco se puede cambiar su valor.
/* 
const num1 = 5;

console.log(num1);
//

const num6 = 5;
const num6 = 5;
num6 = 5;
console.log(num1); */


//aunque tenemos una opcion para agregar valores como veremos a continuacion:

const otronum = [10, 15, 20];
otronum.push(25);
console.log(otronum);

// si sabemos que nuestro valor va a ser reaccionado usemos la palabra let pero si sabemosque no va aser reaccionado entonces usemos const el cual solo permite agregar otro valor con este ejemplo que ya vimos