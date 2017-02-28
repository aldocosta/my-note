import { Pipe, PipeTransform } from '@angular/core';
import { NotaClass } from '.././Notas/NotaClass';

// // Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'notasFilter'
})

export class NotasFilterPipe implements PipeTransform {   
    transform(value :NotaClass[], title:string):NotaClass[] {
      if(title==undefined)return;
      var ret = value.filter(function(obj){
         return (obj.title.toLowerCase().indexOf(title.toLowerCase())>-1);
      });
      return ret;    
  }
}


/*
 Simplesmente retorna uma substring em um range e concatena "..." no final
*/
// @Pipe({name: 'notasFilter'})
// export class NotasFilterPipe implements PipeTransform {
//   transform(value: string, from: number,to:number): string {
//       var retorno = value.substring(from,to) +' ...';
//       return retorno;    
//   }
// }