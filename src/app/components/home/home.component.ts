import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  artist: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.artist = spotify.getNewReleases()
      .subscribe((response: any) => {
        console.log(response);
        this.artist = response;
        this.loading = false;
      }, (errorService) => {
        console.log(errorService);
        console.log(errorService.error.error.message);
        this.errorMessage = errorService.error.error.message;
        this.error = true;
        this.loading = false;


      });
    //  console.log(this.artist);
  }





}
