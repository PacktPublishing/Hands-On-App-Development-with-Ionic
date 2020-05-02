import { observable, action } from 'mobx-angular';

export interface INote {
  Id: number;
  title: string;
  description: string;
  archived: boolean;
  imagePath: string;
}

export class Note implements INote {
  Id: number;
  title: string;
  description: string;
  @observable archived: boolean;
  @observable imagePath: string;

  constructor (note: Partial<INote>) {
    this.Id = note.Id ? note.Id : new Date().getTime();
    this.title = note.title ? note.title : '';
    this.description = note.description ? note.description : '';
    this.setArchived(note.archived !== undefined ? note.archived : false);
    this.setImagePath(note.imagePath ? note.imagePath : '');
  }

  @action
  setArchived(value) {
    this.archived = value;
  }

  @action
  setImagePath(imagePath) {
    this.imagePath = imagePath;
  }
}
