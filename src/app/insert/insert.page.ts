import { Component, OnInit } from '@angular/core';
import { Iarticulo, Imotor, Iinmobiliaria, Itecnologia } from '../interfaces';
import { ToastController } from '@ionic/angular';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  titulo1: string = "Motor";
  titulo2: string = "Inmobiliarias";
  titulo3: string = "Tecnologia";
  titulo4: string = "Hogar";
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
  // coche: boolean;
  // moto: boolean;
  // vehiculo: string;

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
  articulos: (Iarticulo | Imotor | Iinmobiliaria | Itecnologia)[] = [
    // {
    //   "nombre": "camion",
    //   "descripcion": "vehiculo 4 ruedas",
    //   "precio": 12000
    // },
    // {
    //   "nombre": "chalet",
    //   "descripcion": "casa en parcela",
    //   "precio": 280000
    // },

  ];

  constructor(private _toastCtrl: ToastController, private _articuloService: ArticuloService) { }

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
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "precio": this.precio,
      "key":null,
      "vehiculo": this.stateMotor,
      "kilometros": this.kilometros,
      "anyos": this.anyos
    };
    // this.articulos.push(motor);
    this._articuloService.setMotor(motor);
    this.presentToast();
  }
  insertarInmobiliara() {
    let inmobiliaria: Iinmobiliaria = {
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "precio": this.precio,
      "key":null,
      "numeroHabitaciones": this.numeroHab,
      "localidad": this.localidad
    };
    this._articuloService.setInmobiliaria(inmobiliaria);
    this.presentToast();
  }
  insertarTecnologia() {
    let tecnologia: Itecnologia = {
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "precio": this.precio,
      "key":null,
      "estado": this.stateEstado
    };
    this._articuloService.setTecnologia(tecnologia);
    this.presentToast();
  }
  ngOnInit() {

  };

}


