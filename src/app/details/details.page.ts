import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iarticulo } from '../interfaces';
import { ArticuloService } from '../services/articulo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  articulo: Iarticulo;
  name : string;
  constructor(private _activateRouete:ActivatedRoute, private _articuloService: ArticuloService) { }

  ngOnInit() {
    this.name= this._activateRouete.snapshot.paramMap.get('name');
    console.log("He recibido: "+ this.name);
    //this.articulo = this._articuloService.getArticuloName(this.name);    
  }

}
