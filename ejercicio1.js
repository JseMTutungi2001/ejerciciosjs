alert('funcionando');
//Variables//

var mensje = 'soy un texto'; /* las comillas simples (``) y las comillas dobles("") se utilizan para encerrar un valor de tipo texto*/

var numero = 5;

var numeroDos = "10"; /*las variables javascript son sencibles a mayusculas y minusculas y no se pueden iniciar con numeros, pueden ir al medio o al final la igual que los guiones*/

alert(numero + numeroDos); /* no se puede sumar una variable de tipo numero con una tipo string*/

var numero = 5;
var numero2 = 10;
alert(numero + numero2);

/* las variables se pueden se pueden  sobreescribir*/
var numero = 8;

alert(numero);

/* tambien tenemos las constantes las cuales a diferencia de las variables no pueden ser sobreescritas y si intentamos  escribirlas dara un error*/
/* por ejemplo esto:*/

const numero5 = 9;

alert(numero5);

const numero3 = 12;

alert(numero5);


/*tambien podemos interactuar con nuestra consola, para esto usamos*/


var numero = 27;
console.log(numero);

var tu = 26;
var yo = 1;
console.log(tu + yo);

var cuatro = 3;
var cuatro = cuatro + 1;
console.log(cuatro);

//tambien se puede realizar de esta forma//

var cuatro = 3;
cuatro++;
console.log(cuatro);
// ///
var cuatro = 3;
cuatro--;
console.log(cuatro);
//condicionales//
//simple//
var numero = 10;
if (numero > 5) {
    console.log('verdadero!');
} else {
    console.log('falso!')
}
//doble condicional//

var numero = 4;
var nombre = ('juan')
    //el && que es igual a (y), realizara que la condicional devuelva el valor de ambas condiciones, es decir deben cumplirse ambas para que sea verdadero //
if (numero > 3 && nombre == ('juan')) {
    console.log('verdadero!');
} else {
    console.log('falso!')
}

//en este caso el || se refiere al (o), el cual devolvera verdadero con que solo una condicion se cumpla

if (numero > 5 || nombre == ('juan')) {
    console.log('verdadero!');
} else {
    console.log('falso!')
}


// variables de tipo buliana no se como se escribe pero aja, quiere decir que solo evalua verdadero o falso//

verdadero = true;
if (verdadero) {
    console.log('verdadero!');
} else {
    console.log('falso!')
}
//en el siguiente ejemplo preguntaremos si la condicion es false lo cual sea hace con solo colocar el signo de exclamacion al comienzo//
verdadero = true;
if (!verdadero) {
    console.log('verdadero!');
} else {
    console.log('falso!')
}



//Arreglos// 
//los arreglos no se sobre escriben, pero si pueden almacenar los 3 tipos de valores tanto numeros,como string y buliana//
var arreglo = [1, 5, 10, 'ignacio', false];
console.log(arreglo);
//para llamar a un valor del arreglo lo hacemos asi, se comienza a contar desde el cero y por ejemplo el valor 10 estaria ene el dos//

console.log(arreglo[2]);



//recorredores, se usan para llamar a cada variable del arreglo una por una entre ellos tenemos el for//
//ok como lo especificamos con 1(var i, el cual i es el contador, que comience en 0 debido que desde allicomienza a contar el inicio del arreglo) 2(i<5 quiere decir que el ciclo seguir mientras sea menor a 5 )3,(i++ es para que vaya aumentando uno con cada vuelta)
for (var i = 0; i < 5; i++) {
    console.log(arreglo[i]);
}

//while//
//dentro del parentesis se coloca la condicio que se debe cumpli para que se realice la accion
i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
//DOwhile//

//que realiza el dowhile pues el primero ejecuta una accion una ves y luego pregunta por la condicion//
//se realiza asi//
i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

//Switch//
var hora = 10;

switch (hora) {

    case 10:
        console.log('buenos dias');
        break;
    case 15:
        console.log('buenas tardes');
        break;
    case 19:
        console.log('buenas noches');
        break;
    case
    defaul:
        console.log('jodete');
        break;
}

//funciones

var num1 = 10;
var num2 = 10;

function suma() {
    return console.log(num1 + num2);
}


function suma(num1, num2) {
    return console.log(num1 + num2);
}

suma(10, 63);