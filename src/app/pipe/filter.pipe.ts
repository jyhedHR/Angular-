import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],titre:string): any[] {
    console.log(titre)
if(titre== ''){
  return value;
} 
return value.filter(e=>e.title.toLowerCase() == titre.toLowerCase())
  }

}
