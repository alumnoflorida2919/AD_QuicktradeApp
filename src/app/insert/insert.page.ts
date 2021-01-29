import {Component, OnInit} from '@angular/core';
import {Iarticulo, Imotor, Iinmobiliaria, Itecnologia} from '../interfaces';
import {ToastController} from '@ionic/angular';
import {ArticuloService} from '../services/articulo.service';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
    selector: 'app-insert',
    templateUrl: './insert.page.html',
    styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
    titulo1: string = 'Motor';
    titulo2: string = 'Inmobiliarias';
    titulo3: string = 'Tecnologia';
    titulo4: string = 'Hogar';
    oculto1: boolean = false;
    oculto2: boolean = false;
    oculto3: boolean = false;
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
    id: number;

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

    articulos: (Iarticulo | Imotor | Iinmobiliaria | Itecnologia)[] = [];

    constructor(private _toastCtrl: ToastController, private _articuloService: ArticuloService, private _activatedRoute: ActivatedRoute, private  _db: AngularFireDatabase) {
    }

    async presentToast() {
        const toast = await this._toastCtrl.create({
            message: 'Se ha insertado el articulo correctamente.',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

    insertarMotor() {
        let motor: Imotor = {
            'nombre': this.nombre,
            'descripcion': this.descripcion,
            'precio': this.precio,
            'key': null,
            'vehiculo': this.stateMotor,
            'kilometros': this.kilometros,
            'anyos': this.anyos,
            'id_propietario': this.id
        };
        // this.articulos.push(motor);
        this._articuloService.setMotor(motor);
        this.presentToast();
    }

    insertarInmobiliara() {
        let inmobiliaria: Iinmobiliaria = {
            'nombre': this.nombre,
            'descripcion': this.descripcion,
            'precio': this.precio,
            'key': null,
            'numeroHabitaciones': this.numeroHab,
            'localidad': this.localidad,
            'id_propietario': this.id
        };
        this._articuloService.setInmobiliaria(inmobiliaria);
        this.presentToast();
    }

    insertarTecnologia() {
        let tecnologia: Itecnologia = {
            'nombre': this.nombre,
            'descripcion': this.descripcion,
            'precio': this.precio,
            'key': null,
            'estado': this.stateEstado,
            'id_propietario': this.id
        };
        this._articuloService.setTecnologia(tecnologia);
        this.presentToast();
    }

    ngOnInit() {
        this.property = this._activatedRoute.snapshot.paramMap.get('name');
        this.giveMeIdUser();
    };

    private giveMeIdUser() {
        let ref = this._db.database.ref('usuarios');
        ref.orderByChild('propietario').equalTo(this.property)
            .once('value', snapshot => {
                snapshot.forEach(child => {
                        this.id = child.val().id;
                    }
                );
            });
    }
}


