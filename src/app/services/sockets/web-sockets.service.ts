import { Injectable } from '@angular/core';
import { Socket,Manager } from 'socket.io-client'



@Injectable({
  providedIn: 'root'
})


export class WebSocketsService {

  socket!: Socket

  constructor() { }

    connectToServer = ( accessToken: string ) => {

      const manager = new Manager('http://10.18.98.24:3000/socket.io/socket.io.js' , {
          extraHeaders: {
              hola: 'mundo',
              authentication: accessToken
          }
      });

      if ( this.socket ) {
          this.socket.removeAllListeners();

      }

      // namespace root
      this.socket = manager.socket('/');

      this.addListeners();

    }


    addListeners = () => {



      this.socket.on('connect', () => {
          console.log('Conectado al servidor')
      })



      this.socket.on('disconnect', () => {
          console.log('Desconectado del servidor')
      })



      this.socket.on('clientsConnected', ( clients: string[]) => {
          console.log(clients)


      })


      this.socket.on('messagesFromServer', (payload) => {
        console.log(payload)
    })

    }


}
