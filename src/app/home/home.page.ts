import { Component } from '@angular/core';

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
  constructor() {}
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

}
