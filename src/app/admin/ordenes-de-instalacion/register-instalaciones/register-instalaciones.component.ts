import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { leaders, RespAPIAllLeaders } from 'src/app/interfaces/Admin/GetApi.interface';
import { ApiAdminService } from 'src/app/services/Admin/API/api-admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register-instalaciones',
  templateUrl: './register-instalaciones.component.html',
  styleUrls: ['./register-instalaciones.component.css']
})
export class RegisterInstalacionesComponent implements OnInit {

  form: FormGroup
  
  leaders: leaders[] = []

  estados = ["En proceso", "Iniciado", "Finalizado"]


  constructor(
    private fb:FormBuilder,
    private router: Router,
    private adminService: ApiAdminService
  ) { 


    this.form =  this.fb.group({
      razon: ['',Validators.required],
      direccion: ['',Validators.required],
      ledearId: ['',Validators.required],
      fecha_inicial: ['',Validators.required],
      fecha_final: ['',Validators.required],
      estado: ['',Validators.required],
      dimensiones: ['',Validators.required],
      comentarios: ['',Validators.required],
    })

  }

  ngOnInit(): void {
    this.cargarLeaders()
  }



  cargarLeaders(){

    this.adminService.getAllLeaders().subscribe(
      (resp:any)=>{

          resp.forEach((element:RespAPIAllLeaders) => {
            
            let fullName= element.fullName
            let id= element.id

            let body :leaders = {fullName, id} 

            this.leaders.push(body)

          });

          console.log(this.leaders);
          

      }
    )

  }

  register(){
    
    

    const{razon, direccion, fecha_inicial, ledearId,fecha_final, estado, comentarios, dimensiones} =  this.form.value


    this.adminService.registerOrder({razon, direccion, fecha_inicial, ledearId,fecha_final, estado, comentarios, dimensiones} ).subscribe(
      resp=>{

        Swal.fire({
          icon: 'success',
          title: `Se creo correctamente ${razon}`,  
          timer: 2000

        })

        this.router.navigateByUrl('/admin/instalaciones')

      }
    )

  }

}
