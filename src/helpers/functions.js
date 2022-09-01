import { childs, perfil } from "../data/variables.js" 
import { perfiles } from "../data/variables.js"
import { divResultados } from "../index.js"


export function handleSubmitControl(event){                             // funcion boton aceptar
        
    const nuevoPerfil = {...perfil}                                            // cargo mi nuevo objeto form
        perfiles.push(nuevoPerfil)   
        localStorage.setItem("perfiles", JSON.stringify(perfiles))        
        childs.forEach((hijo) => {                                        // limpiar inputs
        hijo.value = ""         
        
    })    
    
    Toastify({

        text: "Aceptado",            
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "left", 
        
        }).showToast();     
    
} 

export function handleInputControl(event){                           // funcion manejador de inputs fomulario
    console.log(event.target.placeholder)
    event.preventDefault()

    const {id, value} = event.target                                  //captando targets y adaptar variable de uso


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

export function handleClear() {                     // funcion clear storage

    perfiles.forEach((el) => {
        perfiles.pop()        
    });
    
    divResultados.innerHTML=""

    localStorage.clear()

    Toastify({

        text: "Borrado",            
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "left", 
        
        }).showToast();     
    

} 
                
                              
export function handleShow(){                                    // funcion mostrar elementos

    perfiles.forEach((perfil)=>{
    
        const divPerfil = document.createElement("div")
    
          
            divPerfil.innerHTML = `
            <tr>
            <td>${perfil.nombre}</td>
            <td>${perfil.apellido}</td>
            <td>${perfil.tipoPerfil}</td>       
            <td>${perfil.monto}</td>  
            </tr> 
               
                `
        
    
            divResultados.append(divPerfil)
    
        })
        
    }
             

                    
                                       
                
               
                         
              

             
           
                         
           
                  

               
            
        