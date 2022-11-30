import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { RespAPIAuthAdmin } from 'src/app/interfaces/Admin/AuthAdmin.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url= environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }


  login(body:any){

    const urlServer = `${this.url}/auth/login`

    return this.http.post<RespAPIAuthAdmin>(urlServer,body)
  }

  validarToken (): Observable<boolean> {

    const urlServer= `${this.url}/auth/renew`;
    const token =  localStorage.getItem('token') || ''


    const headers= new HttpHeaders().set
    ('Authorization', (` Bearer ${token}`) )

    return this.http.get<RespAPIAuthAdmin> (urlServer,{headers})
    .pipe(
      map(resp=>{

        return resp.status;

      }),
      catchError(err => of(false))
    )
    ;
  }

}
