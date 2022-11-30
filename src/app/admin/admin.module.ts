import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps'; 
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestsComponent } from './tests/tests.component';
import { AuthComponent } from './auth/auth.component';
import { ArtesanosComponent } from './artesanos/artesanos.component';
import { OrdenesDeInstalacionComponent } from './ordenes-de-instalacion/ordenes-de-instalacion.component';
import { UbiacacionArtesanosComponent } from './artesanos/ubiacacion-artesanos/ubiacacion-artesanos.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { RegisterInstalacionesComponent } from './ordenes-de-instalacion/register-instalaciones/register-instalaciones.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { NgChartsModule } from 'ng2-charts';
import { EstadisticasLideresComponent } from './estadisticas-lideres/estadisticas-lideres.component';
import { JitsiComponent } from './jitsi/jitsi.component';


@NgModule({
  declarations: [
    AdminComponent,
    TestsComponent,
    AuthComponent,
    PaginadorComponent,
    ArtesanosComponent,
    OrdenesDeInstalacionComponent,
    UbiacacionArtesanosComponent,
    RegisterInstalacionesComponent,
    EstadisticasComponent,
    EstadisticasLideresComponent,
    JitsiComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    NgChartsModule

  ]
})
export class AdminModule { }
