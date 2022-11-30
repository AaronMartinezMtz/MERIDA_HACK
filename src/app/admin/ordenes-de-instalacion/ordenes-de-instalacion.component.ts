import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespAPIOrdes } from 'src/app/interfaces/Admin/GetApi.interface';
import { ApiAdminService } from 'src/app/services/Admin/API/api-admin.service';


@Component({
  selector: 'app-ordenes-de-instalacion',
  templateUrl: './ordenes-de-instalacion.component.html',
  styleUrls: ['./ordenes-de-instalacion.component.css']
})
export class OrdenesDeInstalacionComponent implements OnInit {

  instalaciones!:  RespAPIOrdes[]


  limit=20
  Cargando= true;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 1;


  constructor(
    private apiAdminService: ApiAdminService,
    private router: Router
  ) { }





  ngOnInit(): void {
    this.getOrders();
  }


  getOrders(){
    this.apiAdminService.getAllOrders()
        .subscribe(resp =>{

          this.instalaciones= resp
          console.log(this.instalaciones);
          

        })

  }

  registrar(){
  
    this.router.navigateByUrl('/admin/instalaciones-register')

  }

  editar(data: any){



  }

}
