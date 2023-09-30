import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor() { }

  //Variable para tomar foto
  async takePicture() {
    Camera.requestPermissions()
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader: 'Imagen',
      promptLabelPhoto: 'Seleccionar imagen',
      promptLabelPicture: 'Tomar Foto'
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    return image.dataUrl;
  
    // Can be set to the src of an image now
  };

}
