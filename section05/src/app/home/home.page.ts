import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';
import { Note } from '../core/models/note.model';
import { NotesService } from '../core/services/notes.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { ManageNoteComponent, NoteManageModes } from './components/manage-note/manage-note.component';
import { NotesFiltersPopoverComponent } from './components/notes-filters-popover/notes-filters-popover.component';
import { NotesFilters } from '../core/constants/notes-filters.enum';
import { PictureService } from '../core/services/picture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  constructor(
    public store: NotesService,
    public modalController: ModalController,
    public popoverController: PopoverController,
    private pictureService: PictureService
  ) { }

  ngOnInit() {
  }

  async showFilters(ev) {
    const popover = await this.popoverController.create({
      component: NotesFiltersPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        selectedFilter: this.store.filter
      }
    });
    await popover.present();
    const response = await popover.onDidDismiss();
    if (response.data) {
      this.store.setFilter(response.data as NotesFilters);
    }
  }

  archiveNote(note: Note) {
    this.store.archiveNote(note);
  }

  showImagePreview(imagePath) {
    this.pictureService.showPreview(imagePath);
  }

  async createNote() {
    const modal = await this.modalController.create({
      component: ManageNoteComponent,
      componentProps: {
        mode: NoteManageModes.ADD,
        note: null
      }
    });
    await modal.present();
    const response = await modal.onDidDismiss();
    const note = response.data as Note;
    if (note) {
      this.store.createNote(note);
    }
  }

  async editNote(noteItem: Note) {
    const modal = await this.modalController.create({
      component: ManageNoteComponent,
      componentProps: {
        mode: NoteManageModes.EDIT,
        note: noteItem
      }
    });
    await modal.present();
    const response = await modal.onDidDismiss();
    const note = response.data as Note;
    if (note) {
      this.store.updateNote(note);
    }
  }

}
