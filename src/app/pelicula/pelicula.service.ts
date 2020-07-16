import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';
import { Observable, of } from 'rxjs';
import { PELICULAS } from './peliculas.json';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  
   // Observamos nuestro origen de datos, el observable 
   // estara pendiente de alguna actualizacion de "PELICULAS"
   getListaPeliculas():Observable<Pelicula[]>{
     //Retornamos las peliculas 
     return of(PELICULAS);
   }
}
