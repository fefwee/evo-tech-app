import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  constructor() { }

  setItemLocalStorage (item:string):void{
    localStorage.setItem('token',item)
  }


  public async getItemLocalStorage<T>(key: string): Promise<T | null> {
    try {
    const result = await JSON.parse(localStorage.getItem(key) || '{}');
    if (!Object.keys(result).length) {
    return null;
    }
    return result;
    } catch (error) {
    return null;
    }
    }
 
    
 
}
