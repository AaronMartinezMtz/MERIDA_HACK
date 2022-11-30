import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from '../guards/validar-token.guard';
import { AdminComponent } from './admin.component';
import { ArtesanosComponent } from './artesanos/artesanos.component';
import { UbiacacionArtesanosComponent } from './artesanos/ubiacacion-artesanos/ubiacacion-artesanos.component';
import { AuthComponent } from './auth/auth.component';
import { EstadisticasLideresComponent } from './estadisticas-lideres/estadisticas-lideres.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { JitsiComponent } from './jitsi/jitsi.component';
import { OrdenesDeInstalacionComponent } from './ordenes-de-instalacion/ordenes-de-instalacion.component';
import { RegisterInstalacionesComponent } from './ordenes-de-instalacion/register-instalaciones/register-instalaciones.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      // {
      //   path: '',
      //   component: AuthComponent,
      // },
      {
        path: 'tests',
        component: TestsComponent,
        canActivate: [ValidarTokenGuard]
      },
      {
        path: 'ubicacion',
        component: UbiacacionArtesanosComponent
      },
      {
        path: 'instalaciones',
        component: OrdenesDeInstalacionComponent
      },
      {
        path: 'instalaciones-register',
        component: RegisterInstalacionesComponent
      },
      {
        path: 'estadisticas',
        component: EstadisticasComponent
      },
      {
        path: 'estadisticas-lider',
        component: EstadisticasLideresComponent
      },
      {
        path: 'sala-de-conferencias',
        component: JitsiComponent
      },
      
      
    ]
  }
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
