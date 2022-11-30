import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/Admin/Auth/auth.service';
import { WebSocketsService } from '../services/sockets/web-sockets.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router, private SocketWebService: WebSocketsService){


  }

  canActivate(): Observable <boolean> | boolean  {
    
    return this.authService.validarToken()
    .pipe(
      tap(valid =>{


        if(!valid){
          this.router.navigateByUrl('/admin');
          this.SocketWebService.socket.disconnect()
        }else{

          const token= localStorage.getItem('token')|| ''
          this.SocketWebService.connectToServer(token)

        }

      })
    )
  }
  
}
