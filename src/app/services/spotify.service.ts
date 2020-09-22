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
      'Authorization': 'Bearer BQDzF_zILYbyE3VsPCefpS0E_hJGpX3F0GBUX1kYeCa8bDoBiG7I8z-8ji8jvfmZwWUYMcCtEDs35_5Mdhk'
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


