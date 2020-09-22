import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Pipe({
  name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {


  constructor(private ds: DomSanitizer) {}

  transform(uri: string, url:string): SafeResourceUrl {
console.log(url+uri);
    return this.ds.bypassSecurityTrustResourceUrl(url+uri);


  }

}
