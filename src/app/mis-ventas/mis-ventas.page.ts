import {Component, OnInit} from '@angular/core';
import {Iproducto} from '../interfaces';
import {ActivatedRoute} from '@angular/router';
import {ArticuloService} from '../services/articulo.service';

@Component({
    selector: 'app-mis-ventas',
    templateUrl: './mis-ventas.page.html',
    styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {
    producto: Iproducto[] = [];

    constructor(private _activatedRoute: ActivatedRoute, private _articuloService: ArticuloService) {
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
