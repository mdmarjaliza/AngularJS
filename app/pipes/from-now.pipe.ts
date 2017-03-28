import * as moment from "moment";
import "moment/locale/es";

import { Component, Pipe, PipeTransform } from '@angular/core';
 

/*---------------------------------------------------------------------------------------------------------|
 | Creamos el pipe FromNowPipe. Su cometido es, partiendo de una fecha dada, retornar una cadena de texto  |
 | que exprese el tiempo que ha pasado desde dicha fecha hasta ahora. Por ejemplo: hace 2 horas. Para esta |
 | tarea nos apoyamos en la librería Moment.js                                                             | 
 |---------------------------------------------------------------------------------------------------------*/

@Pipe({
    name: "TransFecha"
})
export class TransFechaPipe implements PipeTransform {
    transform(fecha: Date){
        return moment(fecha).fromNow()
    }
}