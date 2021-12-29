import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PublicacionesRoutingModule} from './publicaciones-routing.module';
import {PublicacionesComponent} from './publicaciones.component';

@NgModule({
  declarations: [PublicacionesComponent],
  imports: [CommonModule, PublicacionesRoutingModule, ScullyLibModule],
})
export class PublicacionesModule {}
