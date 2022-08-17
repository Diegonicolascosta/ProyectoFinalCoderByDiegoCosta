import { perfil } from "./index.js" 
import { perfiles } from "./variables.js"
import { childs } from "./variables.js"

export function handleSubmitControl(event){                             // funcion boton aceptar
    console.log(perfil)
    perfiles.push(perfil) 
    console.log(childs)
    childs.forEach((hijo) => {
        hijo.value =""
     }); 

        
    console.log(perfiles)
} 

export function handleInputControl(event){                              // funcion manejador de inputs fomulario
    //console.log(event)
    //console.log(event.target)
    console.log(event.target.placeholder)
    event.preventDefault()

    const id = event.target.placeholder
    const value = event.target.value


    switch (id) {     
        case "nombre":
            perfil.setValue(value,id)
            event.target.value = perfil.getValue(id)
            perfil.normalizar()                     
            break;

        case "apellido":
            perfil.setValue(value,id)
            event.target.value = perfil.getValue(id) 
            perfil.normalizar()                          
            break;

        case "tipoPerfil":
            perfil.setValue(value,id)
            event.target.value = perfil.getValue(id) 
            perfil.normalizar()                           
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

         
                
                              
                

                    
                                       
                
               
                         
              

             
           
                         
           
                  

               
            
        