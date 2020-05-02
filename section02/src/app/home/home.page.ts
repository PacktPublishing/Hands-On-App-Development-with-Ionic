import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {
  @observable notes;
  constructor() { }

  ngOnInit() {
    this.initNotes();
  }

  @action
  initNotes() {
    this.notes = [];
  }

  @action
  archiveNote(note) {
    note.archived = true;
  }

  @action
  createNote() {
    this.notes.push({
      title: 'new note',
      description: 'some desc',
      archived: false
    });
    console.log('added a new note');
  }

  @computed
  get archivedNotesCount() {
    return this.notes.filter((note) => !!note.archived).length;
  }

}
