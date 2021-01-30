import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Iarticulo, Iinmobiliaria, Imotor, Itecnologia} from '../interfaces';
import {AngularFireDatabase} from '@angular/fire/database';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-modify-article',
    templateUrl: './modify-article.page.html',
    styleUrls: ['./modify-article.page.scss'],
})
export class ModifyArticlePage implements OnInit {
    nombre: string;
    descripcion: string;
    precio: number;
    stateMotor: string;
    kilometros: number;
    anyos: number;
    numeroHab: number;
    localidad: string;
    stateEstado: string;
    property: string;
    name: string;
    clave: string;

    articulos: (Iarticulo | Imotor | Iinmobiliaria | Itecnologia)[] = [];

    constructor(private _activateRoute: ActivatedRoute, private _db: AngularFireDatabase, private _toastCtrl: ToastController) {
    }

    async presentToast() {
        const toast = await this._toastCtrl.create({
            message: 'Se ha editapo el articulo correctamente.',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

    ngOnInit() {
        this.name = this._activateRoute.snapshot.paramMap.get('name');
        this.chargeArtileMotor();
        this.chargeArticleInmobiliaria();
        this.chargeArticleTecnologia();
    }

    private chargeArtileMotor() {

        let ref = this._db.database.ref('articulos/motor');
        ref.orderByChild('nombre').equalTo(this.name).once('value', snapshot => {
            this.articulos = [];
            snapshot.forEach(child => {
                this.articulos.push(child.val());
                this.clave = child.key;
            });
        });
    }

    private chargeArticleInmobiliaria() {
        let ref = this._db.database.ref('articulos/inmobiliaria');
        ref.orderByChild('nombre').equalTo(this.name).once('value', snapshot => {
            this.articulos = [];
            snapshot.forEach(child => {
                this.clave = child.key;
            });
        });
    }

    private chargeArticleTecnologia() {
        let ref = this._db.database.ref('articulos/tecnologia');
        ref.orderByChild('nombre').equalTo(this.name).once('value', snapshot => {
            this.articulos = [];
            snapshot.forEach(child => {
                this.clave = child.key;
            });
        });
    }

    editMotor() {
        let ref = this._db.database.ref('articulos/motor');
        ref.child(this.clave).set({
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
            vehiculo: this.stateMotor,
            kilometros: this.kilometros,
            anyos: this.anyos
        });
        this.presentToast();
    }


    editInmobiliaria() {
        let ref = this._db.database.ref('articulos/inmobiliaria');
        ref.child(this.clave).set({
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
            numeroHabitaciones: this.numeroHab,
            localidad: this.localidad,
        });
        this.presentToast();
    }

    editTecnologia() {
        let ref = this._db.database.ref('articulos/tecnologia');
        ref.child(this.clave).set({
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
            estado: this.stateEstado
        });
        this.presentToast();
    }
}
