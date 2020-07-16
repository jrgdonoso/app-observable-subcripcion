import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-lista-pelicula',
  templateUrl: './lista-pelicula.component.html',
  styleUrls: ['./lista-pelicula.component.css']
})
export class ListaPeliculaComponent implements OnInit {


//Variable que guarda las peliculas obtenidas desde nuestro origen de datos "observado"
listaPeliculas:Pelicula[]


  //Importamos el servicio Pelicula, quien obtiene los datos desde el origen de datos
  constructor( private miServicio:PeliculaService ) { }


  
  // Al cargar nos suscribimos y obtenemos los datos de nuestro observable. Por ejemplo podemos enviar
  // informacion a nuestro servidor pero puede que este se demore. Para esto hacemos la solicitud a travez de un observable
  // y nos suscribimos para cuando responsa con los datos solicitados
  ngOnInit() {
          this.miServicio.getListaPeliculas().subscribe(pelis=>this.listaPeliculas=pelis)
  }

}
