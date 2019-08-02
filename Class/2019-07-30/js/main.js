

//// 30-07-2019
console.log((25*12)*(30));

//una usb de 4 gb cuantas fotos de 3 mb le caben

var usb = 4;
var mbSize = 4 * 1024;

var maxPhoto = mbSize / 3;

console.log(maxPhoto);

/*
tenemos 22 cubiculos en un estacionamiento, en cada cubicolo podemos 
meter 3 carros y 2 camionetas .
- Cuantos cubiculos llenamos completos?
- Cuantas camionetas sobran?
- Cuantos carros sobran?

camionetas - 57
carros - 130

*/
    var parkingSpace = 22

var van = 57;

    var car = 130;

var totalParkingVan = parkingSpace*2; 
var totalParkingCarr = parkingSpace *3 ;

console.log(
    'FullHouse ?',((totalParkingCarr<car) && (totalParkingVan < van)
    )
);


console.log(car - totalParkingCarr)
console.log(van - totalParkingVan)


//31-07-2019


//// 1

const DIAMETER = 10;
const PI = 3.1416;
 
const RADIUS = DIAMETER / 2;

const AREA = PI * (RADIUS ** 2);

console.log(AREA);

//2

var number = 2;

if((number % number === 0) && number != 2){
   console.log("no es primo");
}
//3

//Saber si el producto de 2 nùmeros es primo y mayor a 40
//Validar que los nùmeros sean digitos
//{numberOne}{numberTwo}

var number = 2;

if((typeof number === 'number') && (number % number === 0)){
   console.log("es par");
}else{
    console.log("No es nùmerico o es impar");
}


//01-08-2019
//Dado tu nombre, apellidos fecha de nacimiento, genero y lugar de nacimiento dar la primera parte del CURP

var name = "Omar Giovanni";
var firstLastName = "Bautista"
var lastName = "Santacruz";
var dateBirth = "10-17-1993";

var curp = name.slice(0,1);


//Tarea
//imprimir el cuadrado de :
var numbers = [1,2,3,4,5,6,7,8,9]

var count = 0;

while(count < numbers.length){

    console.log(numbers[count]**2);
    count ++;

}