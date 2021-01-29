import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Iarticulo, Iinmobiliaria, Imotor, Itecnologia} from '../interfaces';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
    selector: 'app-modify-article',
    templateUrl: './modify-article.page.html',
    styleUrls: ['./modify-article.page.scss'],
})
export class ModifyArticlePage implements OnInit {
    name: string;
    articulos: (Iarticulo | Imotor | Iinmobiliaria | Itecnologia)[] = [];

    constructor(private _activateRoute: ActivatedRoute, private _db: AngularFireDatabase) {
    }

    ngOnInit() {
        this.name = this._activateRoute.snapshot.paramMap.get('name');
        this.chargeArtile();
    }

    private chargeArtile() {

        let ref = this._db.database.ref('articulos/motor');
        ref.orderByChild('nombre').equalTo(this.name).once('value', snapshot => {
            this.articulos = [];
            snapshot.forEach(child => {
                this.articulos = child.val();
                //quiero cargar en articulos todo el valor q recibre de chil.val() y en el html lo
                //quiero mostrar para poder modificar con un boton que genere una funcion para ello
            })
        });
    }
}
