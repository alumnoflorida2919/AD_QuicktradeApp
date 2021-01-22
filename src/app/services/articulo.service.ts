import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Iinmobiliaria, Imotor, Itecnologia} from '../interfaces';


@Injectable()

export class ArticuloService {

    motor: Imotor[] = [];
    inmobiliaria: Iinmobiliaria[] = [];
    tecnologia: Itecnologia[] = [];
    // articulos: (Iarticulo|Imotor|Iinmobiliaria|Itecnologia)[]= [
    //     {

    //       "nombre":"camion",
    //       "descripcion":"vehiculo 4 ruedas",
    //       "precio": 12000
    //     },
    //     {

    //       "nombre":"chalet",
    //       "descripcion":"casa en parcela",
    //       "precio": 280000
    //     },

    //   ]
    constructor(private _db: AngularFireDatabase) {

    }




    // getInmobiliariaKey() {
    //     let ref = this._db.database.ref('articulos/inmobiliaria');
    //     ref.once('value', snapshot => {
    //         snapshot.forEach(child => {
    //
    //             // console.log("child: "+child.val());
    //             let value = child.val();
    //             value.key = child.key;
    //
    //             this.inmobiliaria.push(value);
    //         });
    //     });
    // }
    //
    // getTecnologiaKey() {
    //     let ref = this._db.database.ref('articulos/tecnologia');
    //     ref.once('value', snapshot => {
    //         snapshot.forEach(child => {
    //
    //             // console.log("child: "+child.val());
    //             let value = child.val();
    //             value.key = child.key;
    //
    //             this.tecnologia.push(value);
    //         });
    //     });
    // }


////
    getProductos():firebase.default.database.Reference{
        let ref=this._db.database.ref('articulos/mis_ventas');
        return ref;
    }
    getMotor(): firebase.default.database.Reference {
        let ref = this._db.database.ref('articulos/motor');
        return ref;
    }

    getInmobiliaria(): firebase.default.database.Reference {
        let ref = this._db.database.ref('articulos/inmobiliaria');
        return ref;
    }

    getTecnologia(): firebase.default.database.Reference {
        let ref = this._db.database.ref('articulos/tecnologia');
        return ref;
    }

    /*
    getArticuloName(name:string):(Iarticulo){
      return this.articulos.find(x=>x.nombre === name);
    }*/

    setMotor(articulo: Imotor) {
        let ref = this._db.database.ref('articulos/motor');
        ref.push(articulo);
        // console.log("he recibido de motor: " + res.key);
    }

    setInmobiliaria(articulo: Iinmobiliaria) {
        let ref = this._db.database.ref('articulos/inmobiliaria');
        ref.push(articulo);
        // console.log("he recibido de inmobiliaria: " + res.key);
    }

    setTecnologia(articulo: Itecnologia) {
        let ref = this._db.database.ref('articulos/tecnologia');
        ref.push(articulo);
        // console.log("he recibido de tecnologia: " + res.key);
    }

}
