import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private storage: Storage
  ) { }

  async getAll(itemType: string): Promise<any> {
    const data = await this.storage.get(itemType);
    const items = JSON.parse(data || '[]');
    return items;
  }

  async create(itemType: string, keys: Array<string>, values: Array<any>): Promise<any> {
    const data = await this.storage.get(itemType);
    const items = JSON.parse(data || '[]');
    const obj: any = {};
    obj.Id = new Date().getTime();
    keys.map((key, index) => {
      obj[key] = values[index];
    });
    items.push(obj);
    await this.storage.set(itemType, JSON.stringify(items));
    return {
      ...obj,
      insertId: obj.Id
    };
  }

  async getById(itemType: string, id: number): Promise<any> {
    const data = await this.storage.get(itemType);
    const items = JSON.parse(data || '[]');
    const item = items.find((it) => {
      return it.Id === id;
    });
    return item;
  }

  async update(itemType: string, id: number, keys: Array<string>, values: Array<any>): Promise<any> {
    const data = await this.storage.get(itemType);
    const items = JSON.parse(data || '[]');
    const itemIndex = items.findIndex((item) => {
      return item.Id === id;
    });
    keys.map((key, ind) => {
      items[itemIndex][key] = values[ind];
    });
    this.storage.set(itemType, JSON.stringify(items));
    return items[itemIndex];
  }
}
