import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  
}

// transform(value: any, args?: any[]): any {
//  if(!value) return null;
//  if(!args) return value;

//  args = args.toLowerCase();
//  return value.filter(function(item:any){
//  return Jeson.stringify(item
//  })
// }