package com.mycompany.myapp.service.dto;

//Esta class la usaremos para herencia de valoraciones
import lombok.AllArgsConstructor;
import lombok.Data;

//Genera getters, setters, etc...
@Data
//Genera constructor con todos los parametros
@AllArgsConstructor
public abstract class ValoracionStats {

    private Double avg;
    private Integer max;
    private Integer min;

}
