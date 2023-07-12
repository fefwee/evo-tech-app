import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  constructor() { }

  setItemLocalStorage (item:string):void{
    localStorage.setItem('token',item)
  }

  public async getItemLocalStorage<T>(key: string): Promise<T | null | string> {
    try {
    const result = localStorage.getItem(key);
    if (!result) {
    return null;
    }
    return result;
    } catch (error) {
    return null;
    }
    }
    }
 
    
 

