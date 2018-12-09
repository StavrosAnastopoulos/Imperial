import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
})
export class ImageFileService {
    
    constructor(private sanitizer: DomSanitizer) {}

    parseImages = (event: any): SafeResourceUrl[] => {
        let array: SafeResourceUrl[] = [];
        for (let i = 0; i < event.target.files.length; i++) {
          if (!event.target.files[i].type.includes('image')) {
              array = [];
              break;
          }
          array.push(this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(event.target.files[i])));
        }
        return array;
      }
}