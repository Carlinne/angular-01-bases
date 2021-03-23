//Importación del decorador Component que viene del @angular/core

import { Component } from '@angular/core';

//1. El decorador Component tiene varias propiedades internas. 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  // template: ` 
  // <h1>Hola de nuevo</h1>  
  
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Propiedad con tipado
  title: string = 'Contador App';

  //2.Contador App
  numero: number = 10;

  //3. Métodos en el componente
  sumar() {
    this.numero += 1;
  }
  restar() {
    this.numero -= 1;
  }

  acumular ( valor: number) {
    this.numero += valor;
  }

  //4. Tarea con el contador 
  base: number = 5;

  //5. Crear componente manualmente
}

