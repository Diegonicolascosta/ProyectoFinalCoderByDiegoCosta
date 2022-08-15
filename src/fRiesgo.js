
// Funcion riesgo

 export const gRiesgo = (capitalR, pRiesgo) => {                       
    capitalR = +prompt("Capital a gestionar");
    pRiesgo = +prompt("porcentaje del 1 al 3%");   
    let resultado = 0;   
    
           
    if ((pRiesgo <= 3) && (pRiesgo != isNaN) && (pRiesgo != 0) ){
    switch (pRiesgo){

        case 1:
           resultado = capitalR * 0.01
            console.log ("Su riesgo maximo diario a asumir sera  de " + resultado + " ¡Adios!")
            break;
        case 2:
            resultado = capitalR * 0.02
            console.log ("Su riesgo maximo diario a asumir sera  de " + resultado + " ¡Adios!")
            break;

        case 3: 
            resultado = capitalR *0.03
            console.log ("Su riesgo maximo diario a asumir sera  de " + resultado + " ¡Adios!")
            break;   
            default:
                0;    
 
    }   

    } else 
         console.log ("Rango no aconsejable, intente de nuevo")
    

    
}