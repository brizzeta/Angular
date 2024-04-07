import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(salary: number){
    if(salary === null || salary === undefined)
      return '';
      const formattedValue = salary.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return formattedValue;
  }
}
