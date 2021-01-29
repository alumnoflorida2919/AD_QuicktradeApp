import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticuloService} from '../services/articulo.service';
import {Iarticulo, Iinmobiliaria, Imotor, Itecnologia} from '../interfaces';
import {snapshotChanges} from '@angular/fire/database';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    motor: (Iarticulo | Imotor)[] = [];
    inmobiliaria: (Iarticulo | Iinmobiliaria)[] = [];
    tecnologia: (Iarticulo | Itecnologia)[] = [];


    constructor(private _activatedRoute: ActivatedRoute, private _articuloService: ArticuloService) {
    }

    ngOnInit() {
        this._articuloService.getMotor().once('value', snapshot => {
            snapshot.forEach(child => {
                let value = child.val();
                value.key = child.key;
                this.motor.push(value);
            });
        });
        this._articuloService.getInmobiliaria().once('value', snapshot => {
            snapshot.forEach(child => {
                let value = child.val();
                value.key = child.key;
                this.inmobiliaria.push(value);
            });
        });
        this._articuloService.getTecnologia().once('value', snapshot => {
            snapshot.forEach(child => {
                let value = child.val();
                value.key = child.key;
                this.tecnologia.push(value);
            });
        });
    }
}


