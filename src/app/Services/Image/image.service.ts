import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RequestModel } from 'src/Model/RequestModel/requestModel';
import { FileHandle } from 'src/Model/file-handle.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  
  constructor(private sanitizer: DomSanitizer) {}
  createImages(request: RequestModel) {
    const requestImages: any[] = request.images;
    const imagesToFileHandle: FileHandle[] = [];

    for (let i = 0; i < requestImages.length; i++) {
      const imageFileData = requestImages[i];
      const imageBlob = this.dataUrlToBlob(
        imageFileData.picByte,
        imageFileData.type
      );
      const imageFile = new File([imageBlob], imageFileData.name, {
        type: imageFileData.type,
      });
      const finalFileHandle: FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(imageFile)
        ),
      };
      imagesToFileHandle.push(finalFileHandle);
    }
    request.images = imagesToFileHandle;
    return request;
  }
  dataUrlToBlob(picByte: string, imageType: any) {
    const byteString = window.atob(picByte);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: imageType });
    return blob;
  }
}
