import { Pipe, PipeTransform } from '@angular/core';
/*
 Simplesmente retorna uma substring em um range e concatena "..." no final
*/
@Pipe({name: 'customSlice'})
export class CustomSlicePipe implements PipeTransform {
  transform(value: string, from: number,to:number): string {
      var retorno = value.substring(from,to) +' ...';
      return retorno;    
  }
}