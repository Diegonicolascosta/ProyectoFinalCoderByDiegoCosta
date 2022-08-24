// imports
import {handleInputControl, handleSubmitControl} from "./helpers/functions.js"
import {perfiles} from "./data/variables.js"

// seteo localstorage
const perfilDelLocal = JSON.parse(localStorage.getItem("perfiles"))
perfilDelLocal.forEach((el) => {
    perfiles.push(el)
    
});


// elementos a obtener del DOM 
export const formPerfil = document.getElementById("formPerfil")
export const buttonAccept = document.getElementById("buttonAccept")


// eventos
formPerfil.addEventListener("input", handleInputControl)
buttonAccept.addEventListener("click", handleSubmitControl)

















    


     
        
            
             
    
           
    
        
            
                 
    
  











    
    




