import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Craftsman, RespAPIAllLeaders, RespAPIOrdes } from 'src/app/interfaces/Admin/GetApi.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiAdminService {

  url = environment.baseUrl

  constructor(private http: HttpClient) { }



  getAllcraftsman(){

    const urlServer = `${this.url}/craftsman`

    return this.http.get<Craftsman>(urlServer)

  }


  getAllOrders(){
    const urlServer = `${this.url}/orders`

    return this.http.get<RespAPIOrdes[]>(urlServer)
  }


  registerOrder(body :any){
    const urlServer= `${this.url}/orders`
    return this.http.post(urlServer, body)

  }


  getAllLeaders(){
    const urlServer= `${this.url}/craftsman/leaders`
    return this.http.get<RespAPIAllLeaders>(urlServer)
  }


}
