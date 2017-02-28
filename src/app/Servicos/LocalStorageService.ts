import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {	

	constructor() {}	

    ///Adiciona um item na storage 
    addItemToStorage(storagename:string,item:string):boolean{
        let ret :boolean = true;
        try {
            localStorage.setItem(storagename, item);
        } catch (error) {
            ret = false;
        }
        return ret;
    }

    ///passa o nome do objeto alocado na LocalStorage e retorna parseado ou não
    getItemFromStorage(storageName:string,parseResult):any{        
        if(parseResult){
            return JSON.parse(localStorage.getItem(storageName));
        }
        return localStorage.getItem(storageName);
    }
}