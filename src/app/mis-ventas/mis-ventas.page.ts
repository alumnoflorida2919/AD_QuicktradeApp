import {Component, OnInit} from '@angular/core';
import {Ienvio, Iproducto} from '../interfaces';
import {ActivatedRoute} from '@angular/router';
import {ArticuloService} from '../services/articulo.service';

@Component({
    selector: 'app-mis-ventas',
    templateUrl: './mis-ventas.page.html',
    styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {
    producto: Iproducto[] = [];
    id: number;
    nombre: string;
    puntuacion: number;


    constructor(private _activatedRoute: ActivatedRoute, private _articuloService: ArticuloService) {
    }

    insertarEnvios(nombre, id) {
        console.log("nombre:" +nombre+id);


        let envio: Ienvio = {
            'nombre': nombre,
            'id': id,
            'puntuacion': this.puntuacion
        };
        this._articuloService.setEnvios(envio);

    }

    ngOnInit() {
        this._articuloService.getProductos().once('value', snapshot => {
            snapshot.forEach(child => {
                let value = child.val();
                this.producto.push(value);
            });
        });
    }

}
