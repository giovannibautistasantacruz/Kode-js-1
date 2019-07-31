

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
 
const RADIUS = diametro / 2;

const AREA = PI * (radio ** 2);

console.log(resultado);

//2

var number = 2;

if((typeof number === 'number') && (number % number === 0)){
   console.log("es par");
}else{
    console.log("No es nùmerico o es impar");
}




