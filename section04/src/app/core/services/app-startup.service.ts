import { Injectable } from '@angular/core';
import { NotesService } from './notes.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppStartupService {

  constructor(
    private storageService: StorageService,
    private notesService: NotesService
  ) { }

  async doStartupTasks() {
    await this.storageService.init();
    this.notesService.initNotes();
  }
}

export function startupServiceFactory(
  startupService: AppStartupService
): Function {
  return () => {
    return startupService.doStartupTasks();
  };
}
