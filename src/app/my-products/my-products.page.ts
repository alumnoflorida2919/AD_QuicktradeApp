import {Component, OnInit} from '@angular/core';
import {Iarticulo, Iinmobiliaria, Imotor, Itecnologia} from '../interfaces';
import {ArticuloService} from '../services/articulo.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {ToastController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-my-products',
    templateUrl: './my-products.page.html',
    styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {

    motor: (Iarticulo | Imotor)[] = [];
    inmobiliaria: (Iarticulo | Iinmobiliaria)[] = [];
    tecnologia: (Iarticulo | Itecnologia)[] = [];

    oculto1: boolean = false;
    oculto2: boolean = false;
    oculto3: boolean = false;
    property: string;
    id:number;

    cambiar_oculto1() {
        this.oculto1 = true;
        this.oculto2 = false;
        this.oculto3 = false;
    }

    cambiar_oculto2() {
        this.oculto1 = false;
        this.oculto2 = true;
        this.oculto3 = false;
    }

    cambiar_oculto3() {
        this.oculto1 = false;
        this.oculto2 = false;
        this.oculto3 = true;
    }

    cambiar_oculto4() {
        this.oculto1 = false;
        this.oculto2 = false;
        this.oculto3 = false;
    }

    constructor(private _articuloService: ArticuloService, private _db: AngularFireDatabase, private _toastCtrl: ToastController, private _activatedRoute: ActivatedRoute) {
    }

    async presentToast() {
        const toast = await this._toastCtrl.create({
            message: 'Se ha eliminado el articulo correctamente.',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

    ngOnInit() {
        this.property = this._activatedRoute.snapshot.paramMap.get('name');
        this.giveMeIdUser();
    }

    private giveMeIdUser() {
        let ref = this._db.database.ref('usuarios');
        ref.orderByChild('propietario').equalTo(this.property)
            .once('value', snapshot => {
                snapshot.forEach(child => {
                        this.id = child.val().id;
                        let id=this.id
                        this.giveMeAllMotor(id);
                        this.giveMeAllInmobiliaria(id);
                        this.giveMeAllTecnology(id);
                    }
                );
            });
    }
    giveMeAllMotor(id){
        let ref=this._db.database.ref('articulos/motor');
        ref.orderByChild('id_propietario').equalTo(id).once('value',snapshot=>{
            snapshot.forEach(child=>{
                let value=child.val();
                this.motor.push(value);
            })

        })
    }
    giveMeAllInmobiliaria(id){
        let ref=this._db.database.ref('articulos/inmobiliaria');
        ref.orderByChild('id_propietario').equalTo(id).once('value',snapshot=>{
            snapshot.forEach(child=>{
                let value=child.val();
                this.inmobiliaria.push(value);
            })

        })
    }
    giveMeAllTecnology(id){
        let ref=this._db.database.ref('articulos/tecnologia');
        ref.orderByChild('id_propietario').equalTo(id).once('value',snapshot=>{
            snapshot.forEach(child=>{
                let value=child.val();
                this.tecnologia.push(value);
            })

        })
    }

    deleteMotor(nombre: string) {
        let ref = this._db.database.ref('articulos/motor');
        ref.orderByChild('nombre').equalTo(nombre).once('value', snapshot => {
            this.motor = [];
            snapshot.forEach(child => {
                let clave = child.key;
                ref.child(clave).remove();
            });
        });
        this.presentToast();

    }

    deleteInmobiliara(nombre: string) {
        let ref = this._db.database.ref('articulos/inmobiliaria');
        ref.orderByChild('nombre').equalTo(nombre).once('value', snapshot => {
            this.motor = [];
            snapshot.forEach(child => {
                let clave = child.key;
                ref.child(clave).remove();
            });
        });
        this.presentToast();
    }

    deleteTecnologia(nombre: string) {
        let ref = this._db.database.ref('articulos/tecnologia');
        ref.orderByChild('nombre').equalTo(nombre).once('value', snapshot => {
            this.motor = [];
            snapshot.forEach(child => {
                let clave = child.key;
                ref.child(clave).remove();
            });
        });
        this.presentToast();
    }
}
