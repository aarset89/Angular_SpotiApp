import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }


  getQuery(subQuery: string) {

    const url = `https://api.spotify.com/v1/${subQuery}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQART0YqlIHs4mYevJp2k5epFogI0FmVqBueO_pkuzr5-mG51sOrwoWCyRrx9we9KAbqtK_FMtoZHIIVgHQ'
    });

    return this.http.get(url, { headers: headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases/')
      .pipe(map(data => {
        return data['albums'].items;
      }));

  }

  searchArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&market=US&limit=10&offset=5`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }

  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
      
  }

  getTopTrakcByArtistId(artistId:string){
    return this.getQuery(`artists/${artistId}/top-tracks?country=US`)
    .pipe(map(data=>{
      return data['tracks']
    }));
  }

}


