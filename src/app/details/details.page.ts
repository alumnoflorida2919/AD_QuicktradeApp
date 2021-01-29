import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Iarticulo, Iinmobiliaria, Imotor, Itecnologia} from '../interfaces';
import {ArticuloService} from '../services/articulo.service';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    articulos: (Iarticulo | Imotor | Iinmobiliaria | Itecnologia);
    key: string;

    constructor(private _activateRouete: ActivatedRoute, private _articuloService: ArticuloService,
                private _db: AngularFireDatabase) {
    }

    ngOnInit() {
        this.callMotor();
        this.callInmobiliaria();
        this.callTecnologia();

        this.key = this._activateRouete.snapshot.paramMap.get('key');
    }

    callMotor() {
        let ref = this._db.database.ref('articulos/motor');
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                    if (child.key === this.key) {
                        this.articulos = child.val();
                    }
                }
            );
        });
    }

    callInmobiliaria() {
        let ref = this._db.database.ref('articulos/inmobiliaria');
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                    if (child.key === this.key) {
                        this.articulos = child.val();
                    }
                }
            );
        });
    }

    callTecnologia() {
        let ref = this._db.database.ref('articulos/tecnologia');
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                    if (child.key === this.key) {
                        this.articulos = child.val();
                    }
                }
            );
        });
    }

}
