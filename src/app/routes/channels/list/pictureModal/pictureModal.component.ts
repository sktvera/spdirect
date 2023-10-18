import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-modal-picture',
  templateUrl: 'pictureModal.component.html',
  styleUrls: ['./pictureModal.component.scss'],
})
export class PictureModalComponent {
 

    @Input() data: any; // Recibe la información del elemento seleccionado

    constructor(private modalCtrl: ModalController) { }



  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss();
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
}