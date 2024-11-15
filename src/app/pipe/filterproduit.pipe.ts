import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterproduit'
})
export class FilterproduitPipe implements PipeTransform {

  transform(value: any[], search:string): any[] {
    if(search==''){
      return value;
    }
    return value.filter((e)=>e.name.toLowerCase().includes(search.toLowerCase()) || e.brand.toLowerCase() == search.toLowerCase() || e.price == Number(search)  )

  } 

}
