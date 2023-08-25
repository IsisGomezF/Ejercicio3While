//1
let number =prompt("Escribe un número:")
let i = 1;

while(i <= number){
    if( i % 5 == 0){
        console.log(i + " es multiplo de 5");
    }
    else{
        console.log(number+" No es divisible por 5")
    }
    i++;
}

//2
let number1 = prompt("Escribe un número entre 1 y 50;")
let number2 = prompt("Escribe otro número entre 1 y 50;")
let index=0;

while( index <= 50){
    console.log(index)
    if( index == number1 || index == number2){
        console.log(index + " Loteria!");
    }
    index++;
}

//3
let arreglos = [];
let numbers = parseInt(prompt("Escribe un número: ")); //paseInt -- conviente a numero entero, ya que el prompt siempre lo guarda como cadena

while(numbers !== 0 && !isNaN(numbers)){ // la condicion indica que se termina el ciclo cuando se cumpla la condicion
    arreglos.push(numbers);
    numbers = parseInt(prompt("Escribe un número, para finalizar ingresa 0: "));
}
console.log("Estos fueron los numeros ingresados:" + arreglos);

//4
let arreglo = []
let solicitud = prompt("Escribe una letra o palabra, para finalizar solo presiona aceptar:");

while( solicitud !== ""){ //importante poner negacion "mientras no sea vacio funciona el ciclo"
    arreglo.push(solicitud);
    solicitud = prompt("Escribe una letra o palabra, para finalizar solo presiona aceptar:");
}

console.log( "Esta es la frase que formaste " + arreglo.join(" "))

//5
let dia = prompt("Escribe un dia de la semana, para finalizar ingresa domingo:").toLowerCase();

while (dia !== "domingo"){
    switch (dia){
        case "lunes":
            alert ( dia + " Tienes 5 dias productivos por delante. Animo!")
            break;
        case "martes":
            alert ( dia + " Que dia tan raro, muy lejos del finde y sin el animo del lunes.")
            break;
        case "miercoles":
            alert ( dia + " Ni pa' aqui ni pa' alla.")
            break;
        case "jueves":
            alert ( dia + " Uy! ya casi se acaba.")
            break;
        case "viernes":
            alert ( dia + " Lo que fue fue.")
            break;
        case "sabado":
            alert ( dia + " Puedes dormir hasta tarde.")
            break;
        default:
            alert("Introduce un dia de la semana.");
    }
    dia = prompt("Escribe un dia de la semana,para finalizar ingresa domingo:").toLowerCase();
}
alert ( "Domingo, ve a descansar.")








