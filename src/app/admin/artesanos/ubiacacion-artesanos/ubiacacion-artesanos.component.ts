import { Component, OnInit, ViewChild } from '@angular/core';
import { Craftsman, ubications } from 'src/app/interfaces/Admin/GetApi.interface';
import { ApiAdminService } from 'src/app/services/Admin/API/api-admin.service';
import { MapMarker,MapInfoWindow,GoogleMap } from '@angular/google-maps'

@Component({
  selector: 'app-ubiacacion-artesanos',
  templateUrl: './ubiacacion-artesanos.component.html',
  styleUrls: ['./ubiacacion-artesanos.component.css']
})
export class UbiacacionArtesanosComponent implements OnInit {

  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;



  ubicacionArtesanos : ubications[] = []
  infoContent = '';

  constructor(
    private adminService: ApiAdminService,
  ) { }

  ngOnInit(): void {

    this.getAllArtesanos()
  } 




  getAllArtesanos(){

    this.adminService.getAllcraftsman().subscribe(
      (resp:any)=>{
          
        this.ubicacionArtesanos= resp

      }
    )

  }


  openInfoWindow(marker: any, content: any) {
    console.log(marker);
    this.infoContent =  content
    this.info.open(marker)
  }



  center = {lat: 21.0112286, lng: -89.6257671};
  zoom = 8;
  display?: google.maps.LatLngLiteral;

}
