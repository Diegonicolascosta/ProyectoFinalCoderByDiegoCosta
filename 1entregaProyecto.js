// Calculador de interes compuesto y gestion de riesgo


const iCompuesto = (k, interes, periodo) =>{                  // funcion interes compuesto

    let nombreUsuario = prompt("Ingrese su nombre", "nombre");
    let apellidoUsuario = prompt("ingrese su apellido", "apellido");
    k = +prompt("Capital inicial");
    interes = +prompt("interes anual");
    periodo = +prompt("años");

    let intResultado1 = Math.pow(1.0+interes/100,periodo)*k
    let total= intResultado1 - k;

    
    console.log ( nombreUsuario + " "+ apellidoUsuario +" su interes sera de "+ total);
    

}


const gRiesgo = (capitalR, pRiesgo) => {                       // funcion gestion del riesgo

    capitalR = +prompt("Capital a gestionar");
    pRiesgo = +prompt("porcentaje del 1 al 3%");   
    let resultado = 0;
    
           
    if ((pRiesgo <= 3) && (pRiesgo != isNaN) && (pRiesgo != 0) ){
    switch (pRiesgo){

        case 1:
           resultado = capitalR * 0.01
            console.log ("su riesgo maximo diario a asumir sera  de " + resultado)
            break;
        case 2:
            resultado = capitalR * 0.02
            console.log ("su riesgo maximo diario a asumir sera  de " + resultado)
            break;

        case 3: 
            resultado = capitalR *0.03
            console.log ("su riesgo maximo diario a asumir sera  de " + resultado)
            break;   
            default:
                0;    
 
    }   

    } else 
         console.log ("Fuera de rango")
    

    
}


  // I = M - C

/* Debes definir, antes de nada, el porcentaje de riesgo que quieres asumir en cada operación. Por lo general, debería estar entre el 1-3%. Esto quiere decir, que si tenemos una cuenta de 10.000 € y definimos el riesgo por operación en el 1%, nuestro stop loss asumirá una pérdida máxima por operación de 100 €.
*/