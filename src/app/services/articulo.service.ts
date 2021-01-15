import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Iarticulo, Iinmobiliaria, Imotor, Itecnologia } from "../interfaces";


@Injectable()

export class ArticuloService {
  /*articulos: Iarticulo[]= [
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
  
    ]*/
  constructor(private _db: AngularFireDatabase) {

  }


  /*getArticulos(): Iarticulo[]{
      return this.articulos;
  }
  getArticuloName(name:string):(Iarticulo){
    return this.articulos.find(x=>x.nombre === name);
  }*/

  setMotor(articulo: Imotor) {
    let ref = this._db.database.ref("articulos/motor");
    let res = ref.push(articulo);
    console.log("he recibido de motor: " + res.key);
  }
  setInmobiliaria(articulo: Iinmobiliaria) {
    let ref = this._db.database.ref("articulos/inmobiliaria");
    let res = ref.push(articulo);
    console.log("he recibido de inmobiliaria: " + res.key);
  }
  setTecnologia(articulo: Itecnologia) {
    let ref = this._db.database.ref("articulos/tecnologia");
    let res = ref.push(articulo);
    console.log("he recibido de tecnologia: " + res.key);
  }

}