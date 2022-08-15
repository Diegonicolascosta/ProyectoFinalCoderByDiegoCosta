 export function handleSubmitControl(event){
    console.log(perfil)
} 





export function handleInputControl(event){
    //console.log(event)
    //console.log(event.target)
    //console.log(event.target.placeholder)
    event.preventDefault()

    const id = event.target.placeholder
    const value = event.target.value


    switch (id) {                         

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
            perfil.setValue(value,id)
            event.target.placeholder = perfil.getValue(id)
            perfil.normalizar()
    }
    
}
                                            


         
                
                              
                

                    
                                       
                
               
                         
              

             
           
                         
           
                  

               
            
        