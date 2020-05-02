import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { STORE_CONFIG } from '../constants/store-config';

@Injectable({
  providedIn: 'root'
})
export class SqliteStorageService {
  database: SQLiteObject;
  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) { }

  async initStorage() {
    try {
      await this.platform.ready();
      this.database = await this.sqlite.create({
        name: STORE_CONFIG.DATABASE_NAME,
        location: STORE_CONFIG.DATABASE_LOCATION
      });
      return this.database;
    } catch (err) {
      console.log(err);
    }
  }

  getAll(table: string) {
    return this.database.executeSql(
      `SELECT * FROM ${table}`,
      []
    ).then((data) => {
      const result = [];
      if (data.rows.length > 0) {
        for (let i = 0, len = data.rows.length; i < len; ++i ) {
          result.push(data.rows.item(i));
        }
      }
      console.log('result', result);
      return result;
    });
  }

  create(table: string, keys: Array<string>, values: Array<any>) {
    const query = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${keys.map(k => '?').join(',')})`;
    console.log(query, values);
    return this.database.executeSql(
      query,
      values
    );
  }

  getById(table: string, id: number) {
    return this.database.executeSql(
      `SELECT * FROM ${table} WHERE id = ?`,
      [id]
    ).then(data => {
      return data.rows.item(0);
    });
  }

  update(table: string, id: number, keys: Array<string>, values: Array<any>) {
    const setString = keys.map(key => `${key} = ?`).join(', ');
    const query = `UPDATE ${table} SET ${setString} WHERE id = ?`;
    return this.database.executeSql(
      query,
      [...values, id]
    );
  }

}
