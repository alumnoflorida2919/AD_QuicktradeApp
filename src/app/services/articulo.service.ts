import { Injectable } from "@angular/core";
import { Iarticulo } from "../interfaces";


@Injectable()

export class ArticuloService{
    articulos: Iarticulo[]= [
        {
           
          "nombre":"camion",
          "descripcion":"vehiculo 4 ruedas",
          "precio": 12000
        },
        {
          
          "nombre":"chalet",
          "descripcion":"casa en parcela",
          "precio": 280000
        },
    
      ]

    getArticulos(): Iarticulo[]{
        return this.articulos;
    }
    getArticuloName(name:string):(Iarticulo){
      return this.articulos.find(x=>x.nombre === name);
    }
}