import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageSelectorService {

    // Observable number sources
    private imageSelectedSource = new Subject<string>();

    // Observable number streams
    imageSelected$ = this.imageSelectedSource.asObservable();

    // Service number commands
    selectImage(imageSopSelected: string) {
        this.imageSelectedSource.next(imageSopSelected);
    }
}
