import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';
import { Note, INote } from '../models/note.model';
import { NotesFilters } from '../constants/notes-filters.enum';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  @observable notes: Array<Note>;
  @observable filter: NotesFilters;
  constructor() {
    this.initNotes();
  }

  @action
  initNotes() {
    this.notes = [];
    this.filter = NotesFilters.ACTIVE;
  }

  @action
  setFilter(filter: NotesFilters) {
    this.filter = filter;
  }

  @action
  archiveNote(note: Note) {
    note.setArchived(true);
  }

  @action
  createNote(note: Partial<INote>) {
    this.notes.push(new Note(note));
    console.log('added a new note');
  }

  @action
  updateNote(note: Note) {
    for (let i = 0, len = this.notes.length; i < len; ++i) {
      if (note.Id === this.notes[i].Id) {
        this.notes[i] = note;
        break;
      }
    }
  }

  @computed
  get archivedNotesCount() {
    return this.notes.filter((note) => !!note.archived).length;
  }

  @computed
  get filteredNotes() {
    switch (this.filter) {
      case NotesFilters.ACTIVE:
        return this.notes.filter(note => !note.archived);
      case NotesFilters.ARCHIVED:
        return this.notes.filter(note => !!note.archived);
    }
  }
}
