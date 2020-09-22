import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  result:any[]=[];
loading:boolean=false;
  constructor(private spotify: SpotifyService) { }
  
  buscarArtista(value: string) {
    this.loading=true;
    if (value.length > 0) {
      
      this.spotify.searchArtists(value)
        .subscribe((response: any) => {
          console.log(response);
          this.result = response;
          this.loading=false;
        })
    }else{
      this.loading=false;
    }    


  }

}
