import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
// import { map } from 'rxjs/operators';



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  artistTopTracks: any[] = [];
  loading: boolean = true;

  constructor(private spotiService: SpotifyService, private activatedRoute: ActivatedRoute) {
    let artistId;

    this.activatedRoute.params.subscribe((params) => artistId = params.id);

    this.getArtist(artistId);
    this.getTopTrakcByArtistId(artistId);
    // console.log(this.artist);
  }


  getArtist(artistId: string) {

    this.spotiService.getArtist(artistId).subscribe((data: any[]) => {
      this.artist = data;
      console.log(data);
      this.loading = false;
    }
      //console.log(data)

    );



  }
  getTopTrakcByArtistId(artistId: string) {

    this.spotiService.getTopTrakcByArtistId(artistId)
      .subscribe((data:any[]) => {
        this.artistTopTracks = data
        console.log(data);
      })
  }
}
