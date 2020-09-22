import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(urlImage: any[]): string {

    if (!urlImage) {
      return '/assets/img/noimage.png'
    }

    if (urlImage.length > 0) {
      return urlImage[0].url;
    } else {
      return '/assets/img/noimage.png'
    }
    
  }

}
