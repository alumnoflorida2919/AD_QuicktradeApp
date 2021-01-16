import { Component } from '@angular/core';
import { Iarticulo } from '../interfaces';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo1: string="Motor";
  titulo2: string="Inmobiliarias";
  titulo3: string="Tecnologia";
  titulo4: string="Hogar";
  oculto1: boolean=false;
  oculto2: boolean=false;
  oculto3: boolean=false;
  nombre: string;
  descripcion: string;
  precio: number;

  cambiar_oculto1(){
    this.oculto1=true;
    this.oculto2=false;
    this.oculto3=false;
  }
  cambiar_oculto2(){
    this.oculto1=false;
    this.oculto2=true;
    this.oculto3=false;
  }
  cambiar_oculto3(){
    this.oculto1=false;
    this.oculto2=false;
    this.oculto3=true;
  }
  cambiar_oculto4(){
    this.oculto1=false;
    this.oculto2=false;
    this.oculto3=false;
  }

  articulos: Iarticulo[];

  constructor(private _toastCtrl: ToastController){}

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'Se ha insertado el articulo correctamente.',
      duration: 2000,
      position:'bottom'
    });
    toast.present();
  }

  insertar(){
    let articulo : Iarticulo={

      "nombre":this.nombre,
      "descripcion":this.descripcion,
      "precio": this.precio,
      "key":null
    };
    this.articulos.push(articulo);

    this.presentToast();
  }
}
