

export  class Form {                                               // clase manager de formulario
    constructor (nombre, apellido, tipoPerfil, monto) {
        this.nombre = nombre
        this.apellido = apellido
        this.tipoPerfil = tipoPerfil
        this.cantidad = monto

    }  
        
    

    setValue(value,field){                                          // seteo valores del form
        switch(field){
            case "nombre":
                this.nombre = value
                break;
            case "apellido":
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

    getValue(field){                                            // obtengo valores del form
        let value = ""; 
        switch(field){
            case "nombre":
                value = this.nombre
                break;
            case "apellido":
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
