import { Injectable } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  defaultOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    allowEdit: true,
    correctOrientation: true
  };
  isAndroid: boolean;

  constructor(
    private camera: Camera,
    private photoViewer: PhotoViewer,
    private actionSheetController: ActionSheetController,
    private platform: Platform
  ) {
    this.platform.ready()
      .then(() => {
        this.isAndroid = this.platform.is('android');
      });
  }

  async getPicture(existingImage = null): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const actionSheetConfig = {
        header: 'Note Image',
        buttons: [{
          text: 'Camera',
          icon: this.isAndroid ? 'camera' : '',
          handler: async () => {
            try {
              const imageData = await this.captureImage(this.camera.PictureSourceType.CAMERA);
              resolve(imageData);
            } catch (err) {
              reject(err);
            }
            return true;
          }
        },
        {
          text: 'Photo Library',
          icon: this.isAndroid ? 'image' : '',
          handler: async () => {
            try {
              const imageData = this.captureImage(this.camera.PictureSourceType.PHOTOLIBRARY);
              resolve(imageData);
            } catch (err) {
              reject(err);
            }
            return true;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: this.isAndroid ? 'close' : '',
          handler: () => {
            reject(null);
          }
        }
      ]
      };
      if (existingImage) {
        actionSheetConfig.buttons.splice(2, 0, {
          text: 'Remove',
          role: 'desctructive',
          icon: this.isAndroid ? 'trash' : '',
          handler: () => {
            resolve(null);
          }
        });
      }
      const actionSheet = await this.actionSheetController.create(actionSheetConfig);
      await actionSheet.present();
    }) as Promise<string>;
  }

  async captureImage(sourceType: PictureSourceType) {
    const options = {
      ...this.defaultOptions,
      sourceType
    };

    try {
      const imageData = await this.camera.getPicture(options);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      return base64Image;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  showPreview(imagePath) {
    this.photoViewer.show(imagePath);
  }
}
