import { childs, perfil } from "../data/variables.js" 
import { perfiles } from "../data/variables.js"


export function handleSubmitControl(event){                             // funcion boton aceptar
    //console.log(perfil)    
    const nuevoPerfil = {                                               // cargo mi nuevo objeto form
        nombre: perfil.nombre,       
        apellido: perfil.apellido, 
        tipoPerfil: perfil.tipoPerfil, 
        monto: perfil.monto,
       
       }       
       perfiles.push(nuevoPerfil)   
       localStorage.setItem("perfiles", JSON.stringify(perfiles))       // guardo mi array en localstorage

    childs.forEach((hijo) => {                                          // limpiar inputs
        hijo.value = ""        
        
    })
    
    
    
    console.log(perfiles)
} 

export function handleInputControl(event){                           // funcion manejador de inputs fomulario
    console.log(event.target.placeholder)
    event.preventDefault()

    const id = event.target.placeholder
    const value = event.target.value                                  //captando targets y adaptar variable de uso


    switch (id) {                                                     // evaluando los datos de los inputs del form
        case "nombre":                          
            perfil.setValue(value,id)
            event.target.value = perfil.getValue(id)                                
            break;

        case "apellido":
            perfil.setValue(value,id)
            event.target.value = perfil.getValue(id)                                    
            break;

        case "tipoPerfil":
            perfil.setValue(value,id)
            event.target.value = perfil.getValue(id)                                      
            break;                                    

        case "monto":
            if (!isNaN(value) || value == ""){
                perfil.setValue(value,id)
                event.target.value = perfil.getValue(id)
            } else if (perfil.getValue(id)) {
                event.target.value = perfil.getValue(id)
            } else {
                event.target.value = ""
            }
            break;
       
        default:        
            
            
    
}
                                            
}

         
                
                              
                

                    
                                       
                
               
                         
              

             
           
                         
           
                  

               
            
        