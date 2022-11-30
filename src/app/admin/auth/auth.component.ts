import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Admin/Auth/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form: FormGroup


  constructor(

    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { 
    this.form =  this.fb.group({
      userName: ['',Validators.required],
      password: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }


  login(){

    console.log('click');
    

    const {userName, password} = this.form.value

    const body ={userName, password}

    this.authService.login(body).subscribe(
      resp=>{

          if(resp.status){

          
            Swal.fire({
              icon: 'success',
              title: `Bienvenido de nuevo ${resp.user.userName}`,  
              timer: 2000

            })
  
            this.router.navigateByUrl('/admin/ubicacion')
  
            localStorage.setItem('token', resp.accessToken)

          }


      },er=>{


          let msg  : String
          msg= "hubo un error"
          if(er.error.message.length>0){
            msg= er.error.message[0]
          }
          
          else{
            msg= "hubo un error"
          }

3
            Swal.fire({
              icon: 'error',
              title: `${msg}`,
              showConfirmButton: false,
              timer: 2000
            })


      }
    )

  }


}
