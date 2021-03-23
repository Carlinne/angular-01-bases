import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { 
    console.log("Constuctor");
  }
  
//Primer ciclo de vida en angular junto con su constructor
//Ciertos pasos o métodos que dispara Angular de manera automática.
//Se utiliza para inicializar cosas al ejecutar el proyecto.
//Realizo la petición a un servicio que me regresa el listado de alumnos 
//y necesito que sea lo primero que se muestre.

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  //10. Directiva *ngFor
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor']; 
  heroeBorrado: string = '';

  borrarHeroe() {
    //console.log("Borrando ...");
    //const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
