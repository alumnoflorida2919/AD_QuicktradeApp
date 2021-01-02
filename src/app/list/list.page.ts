import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../services/articulo.service';
import { Iarticulo } from "../interfaces";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  articulo: Iarticulo[];
  constructor(private _activatedRoute: ActivatedRoute, private _articuloService: ArticuloService) { }

  ngOnInit() {   
    this.articulo = this._articuloService.getArticulos();
  }

}
