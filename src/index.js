// imports
import {handleInputControl, handleSubmitControl, handleClear, handleShow} from "./helpers/functions.js"
import {perfiles} from "./data/variables.js"


// seteo localstorage
const perfilDelLocal = localStorage.getItem("perfiles") ? JSON.parse(localStorage.getItem("perfiles")) : []
perfilDelLocal.forEach((el) => {
    perfiles.push(el)
    
});


// elementos a obtener del DOM 
export const formPerfil = document.getElementById("formPerfil")
export const buttonAccept = document.getElementById("buttonAccept")
export const buttonShow = document.getElementById("buttonShow")
export const buttonClear = document.getElementById("buttonClear")
export const divResultados = document.getElementById("divResultados")


// eventos
formPerfil.addEventListener("input", handleInputControl)
buttonAccept.addEventListener("click", handleSubmitControl)
buttonClear.addEventListener("click", handleClear)
buttonShow.addEventListener("click", handleShow)

















    


     
        
            
             
    
           
    
        
            
                 
    
  











    
    




