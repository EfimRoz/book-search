import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  private name: string;

  public setName(name: string): void {
    console.log('setting name:', name);
    if(name) {
      this.name = `${name}`;
    }
  }
  public getName(): string {
    if(this.name) {
      return `${this.name}`;
    }
    else {
      return '';
    }
  }

}
