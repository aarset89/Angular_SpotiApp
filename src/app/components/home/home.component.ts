import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

 artist:any[] = [];

 loading:boolean;

  constructor(private spotify:SpotifyService) {
    this.loading=true;
    this.artist = spotify.getNewReleases()
    .subscribe((response:any) =>{
       console.log(response);
      this.artist = response;
      this.loading=false;
    });
    //  console.log(this.artist);
  }



  

}
