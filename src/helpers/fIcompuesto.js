// Calculador de interes compuesto 

export const iCompuesto = (k, interes, periodo) =>{                 // funcion interes compuesto
    k = +prompt("Capital inicial");
    interes = +prompt("interes anual");
    periodo = +prompt("años");

    let intResultado1 = Math.pow(1.0+interes/100,periodo)*k
    let total= intResultado1 - k;

    
    console.log ( "Su interes acumulado sera de "+ total + " ¡Adios!");
    

}



