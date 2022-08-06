
function comenzar(){

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
                    this.carteras.push("Rv 10%", "Rf 80%", "L10%")                   // esto estaria mal entonces? (¿como tomaria resultado desde afuera?)
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
            
        //const carteras = []      
        const perfiles =[]
        let accion = "";

        accion = prompt("elija una opción: (CREAR/MOSTRAR/SALIR)", "CREAR/MOSTRAR/SALIR")
        while (accion != "SALIR") {            
            if(accion == "CREAR") {
                const perfil = new PerfilCartera()
                perfil.nombre = prompt("ingrese nombre:")
                perfil.apellido = prompt("ingrese apellido:")
                perfil.tipoPerfil = prompt("Tipo de perfil: C / M / A")
                perfil.monto = parseFloat(prompt("ingrese monto"))
                perfiles.push(perfil)
                perfil.normalizar()  
                //perfiles.forEach((el)=>{console.log(el)})           
                //console.log(perfiles)           
                accion = prompt("elija una opción:(CREAR/MOSTRAR/SALIR)", "CREAR/MOSTRAR/SALIR" )
                

            } 
            else if (accion == "MOSTRAR"){     
                                    
                perfiles.forEach((el)=>{console.log(el)}) 
                
                //console.log(perfiles)                
                accion = prompt("elija una opción:(CREAR/MOSTRAR/SALIR)", "CREAR/MOSTRAR/SALIR" )
                    
                    

            }
                
            
                
            }     
            
}
            
            


    


     
        
            
             
    
           
    
        
            
                 
    
  











    
    




