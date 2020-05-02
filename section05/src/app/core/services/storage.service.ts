import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SqliteStorageService } from './sqlite-storage.service';
import { StorageTypes } from '../../core/constants/storage-types.enum';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageType: StorageTypes;
  constructor(
    private platform: Platform,
    private sqliteStorage: SqliteStorageService,
    private localStorage: LocalStorageService
  ) { }

  get isDBReady() {
    return this.platform.is('cordova') && !!this.sqliteStorage.database;
  }

  async init() {
    if (this.platform.is('cordova')) {
      const db = await this.sqliteStorage.initStorage();
      if (db) {
        return await this.sqliteStorage.database.executeSql(
          `CREATE TABLE IF NOT EXISTS notes
          (Id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, archived INTEGER default 0, imagePath TEXT)
          `, []
        );
      }
    } else {
      return Promise.resolve();
    }
  }

  getAll(table: string) {
    if (this.isDBReady) {
      return this.sqliteStorage.getAll(table);
    } else {
      return this.localStorage.getAll(table);
    }
  }

  create(table: string, keys: Array<string>, values: Array<any>) {
    if (this.isDBReady) {
      return this.sqliteStorage.create(table, keys, values);
    } else {
      return this.localStorage.create(table, keys, values);
    }
  }

  getById(table: string, id: number) {
    if (this.isDBReady) {
      return this.sqliteStorage.getById(table, id);
    } else {
      return this.localStorage.getById(table, id);
    }
  }

  update(table: string, id: number, keys: Array<string>, values: Array<any>) {
    if (this.isDBReady) {
      return this.sqliteStorage.update(table, id, keys, values);
    } else {
      return this.localStorage.update(table, id, keys, values);
    }
  }

}
