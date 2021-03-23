import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //Qué componentes contiene este módulo, es un arreglo
    declarations : [
        HeroeComponent,
        ListadoComponent
    ],
    //Que cosas van a ser visibles afuera de este módulo, que cosas serán publicas
    exports : [
        ListadoComponent
    ],
    //Módulos
    imports: [
        //Sirven para las directivas
        CommonModule
    ],

})

export class HeroesModule {}