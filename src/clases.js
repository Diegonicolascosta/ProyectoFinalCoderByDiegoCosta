export class PerfilCartera {
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
            
        setValue(value,field){
            switch(field){
                case "Nombre":
                    this.nombre = value
                    break;
                case "Apellido":
                    this.apellido = value
                    break;
                case "tipoPerfil":
                    this.tipoPerfil = value
                    break;
                case "monto":
                    this.monto = value
                    break;                
                default:
                    break;
            }
        }
        getValue(field){
            let value = "";
            switch(field){
                case "Nombre":
                    value = this.nombre
                    break;
                case "Apellido":
                    value = this.apellido
                    break;
                case "tipoPerfil":
                    value = this.tipoPerfil
                    break;
                case "monto":
                    value = this.monto
                    break;
                
                default:
                    break;
            }
            return value
    }
}