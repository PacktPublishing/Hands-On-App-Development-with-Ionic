import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/core/models/note.model';
import { PictureService } from 'src/app/core/services/picture.service';

export enum NoteManageModes {
  ADD = 'add',
  EDIT = 'edit'
};

@Component({
  selector: 'app-manage-note',
  templateUrl: './manage-note.component.html',
  styleUrls: ['./manage-note.component.scss'],
})
export class ManageNoteComponent implements OnInit {
  noteForm: FormGroup;
  mode: NoteManageModes = NoteManageModes.ADD;
  note: Note;
  manageModes = NoteManageModes;
  noteImage: string;
  constructor(
    public modalController: ModalController,
    private fb: FormBuilder,
    private pictureService: PictureService
  ) { }

  ngOnInit() {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', []]
    });
    if (this.note && this.mode === this.manageModes.EDIT) {
      this.noteForm.get('title').setValue(this.note.title);
      this.noteForm.get('description').setValue(this.note.description);
      this.noteImage = this.note.imagePath ? this.note.imagePath : '';
    }
  }

  async takePicture() {
    try {
      const imageStr = await this.pictureService.getPicture(this.noteImage);
      this.noteImage = imageStr;
    } catch (err) {
      console.log(err);
    }
  }

  formSubmit() {
    let params;
    if (this.mode === this.manageModes.ADD) {
      params = {
        ...this.noteForm.value,
        imagePath: this.noteImage
      };
    } else {
      params = {
        ...this.note,
        ...this.noteForm.value,
        imagePath: this.noteImage
      };
    }
    this.modalController.dismiss(params);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
