import { Pipe, PipeTransform } from '@angular/core';

import { NotaClass } from '.././Notas/NotaClass';

@Pipe({
  name: 'notascheckFilter'
})
export class NotascheckFilterPipe implements PipeTransform {

  transform(value: NotaClass[], check: boolean): NotaClass[] {
    if(check){
      var ret = value.filter((obj)=>{
        return obj.clear==check;
      });      
    }
    return null;
  }

}
