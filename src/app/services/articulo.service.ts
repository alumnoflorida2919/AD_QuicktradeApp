import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Iinmobiliaria, Imotor, Itecnologia} from '../interfaces';


@Injectable()

export class ArticuloService {

    motor: Imotor[] = [];
    inmobiliaria: Iinmobiliaria[] = [];
    tecnologia: Itecnologia[] = [];

    constructor(private _db: AngularFireDatabase) {

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
