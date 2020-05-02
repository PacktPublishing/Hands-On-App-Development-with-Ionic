import { observable, action } from 'mobx-angular';

export interface INote {
  Id: number;
  title: string;
  description: string;
  archived: boolean;
}

export class Note implements INote {
  Id: number;
  title: string;
  description: string;
  @observable archived: boolean;

  constructor (note: Partial<INote>) {
    this.Id = note.Id ? note.Id : new Date().getTime();
    this.title = note.title ? note.title : '';
    this.description = note.description ? note.description : '';
    this.setArchived(note.archived !== undefined ? note.archived : false);
  }

  @action
  setArchived(value) {
    this.archived = value;
  }
}
