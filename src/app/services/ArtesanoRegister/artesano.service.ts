import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespAPIArtesanosRegister } from 'src/app/interfaces/Artesanos/artesanos.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtesanoService {

  url = environment.baseUrl


  constructor(
    private http: HttpClient
  ) { }

    PostRegisterArtesano(body:any){

      const urlServer = `${this.url}/auth/register`

      return this.http.post<RespAPIArtesanosRegister>(urlServer, body)

    }


}
