import { Pipe, PipeTransform } from '@angular/core';
import { NotaClass } from '.././Notas/NotaClass';

// // Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'notasdescricaFilter',
  pure:false
})

export class NotasdescricaoFilterPipe implements PipeTransform {   
    transform(value :NotaClass[], descricao:string):NotaClass[] {
      if(descricao==undefined)return;
      var ret = value.filter(function(obj){
         return (obj.description.toLowerCase().indexOf(descricao.toLowerCase())>-1);
      });
      return ret;    
  }
}