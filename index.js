// elementos a obtener del DOM
const containerValores = document.querySelector("#containerValores") 
const containerImagen = document.querySelector("#fotoUno")

// elementos creados
const imagenDinero = document.createElement("img")
imagenDinero.src = "./assets/dinero.png"                        // imprimir foto en un div ya designado
containerImagen.append(imagenDinero)




function crearPerfil(){                                                        // funcion  para crear y  normalizar el perfil del usuario

class PerfilCartera {
    constructor() {
        this.nombre = "";
        this.apellido = "";
        this.tipoPerfil = ""; 
        this.monto = "";     
        this.carteras = []; 
         
        }
        
        normalizar(){            
            
            this.nombre = this.nombre.toLocaleUpperCase()
            this.apellido = this.apellido.toLocaleUpperCase()       
                        
            this.tipoPerfil = this.tipoPerfil.toLocaleUpperCase()
            switch (this.tipoPerfil){
                case "C":                    
                    this.carteras.push("Rv 10%", "Rf 80%", "L10%")                   
                    break;
                case "M":                    
                    this.carteras.push("Rv 20%", "Rf 60%", "L10%")
                    break;
                case "A":                    
                    this.carteras.push("Rv 30%", "Rf 65%", "L5%")
                    break;
                    default:
                
            }
        }
            
    }
        
        const perfiles =[]         
        let accion = "";
        let accion1 ="";

        accion = prompt("Elija una opción: (CREAR/MOSTRAR/BUSCAR/SALIR)", "CREAR/MOSTRAR/BUSCAR/SALIR")      // Menu opciones 
        accion1 = accion.toUpperCase()        
            if(accion1 == "SALIR"){
                console.log("Fin simulación. Gracias!")
                }
        while (accion1 != "SALIR") {    
                             
            if(accion1 == "CREAR") {
                const perfil = new PerfilCartera()
                perfil.nombre = prompt("ingrese nombre:")       
                perfil.apellido = prompt("ingrese apellido:")
                perfil.tipoPerfil = prompt("Tipo de perfil: C / M / A")
                perfil.monto = parseFloat(prompt("ingrese monto"))  
                              
                const tP = perfiles.some((el) => {                                              // validar repeticion de usuario
                    return  el.nombre == perfil.nombre})  

                    if (tP){
                        console.log("El usuario ya existe, intente nuevamente")
                      }                  
                                       
                perfil.normalizar()  
                perfiles.push(perfil)                                                    
                        
                accion = prompt("Elija una opción:(CREAR/MOSTRAR/BUSCAR/SALIR)", "CREAR/MOSTRAR/BUSCAR/SALIR")
                accion1 = accion.toUpperCase()
                if(accion1 == "SALIR"){
                    console.log("Fin simulación. Gracias!")
                      }     
              }

             
            else if (accion1 == "MOSTRAR"){ 
                perfiles.forEach((el)=>{console.log(el)})                                                               // mostrar todos lo objetos de perfiles[]
                accion = prompt("Elija una opción:(CREAR/MOSTRAR/BUSCAR/SALIR)", "CREAR/MOSTRAR/BUSCAR/SALIR" )
                accion1 = accion.toUpperCase()
                if(accion == "SALIR"){
                    console.log("Fin simulación. Gracias!")
                      }    
           
             }  else if (accion1 == "BUSCAR"){
                const busqueda = prompt("Indique el nombre de la persona a buscar")
                const busqueda1 = busqueda.toUpperCase()  
                const objetoBuscado = perfiles.find((el)=>{
                    return el.nombre == busqueda1})                       

                console.log(objetoBuscado)
                containerValores.innerHTML = objetoBuscado.nombre     // mostrar en el DOM el nombre del objeto buscado           
                accion = prompt("Elija una opción:(CREAR/MOSTRAR/BUSCAR/SALIR)", "CREAR/MOSTRAR/BUSCAR/SALIR" )     // busqueda de usuario
                accion1 = accion.toUpperCase()
                if(accion1 == "SALIR"){
                    console.log("Fin simulación. Gracias!")
                      }    

             }


            }
                  

            
        }     
            
    
                
            
                
        
            
            


    


     
        
            
             
    
           
    
        
            
                 
    
  











    
    




