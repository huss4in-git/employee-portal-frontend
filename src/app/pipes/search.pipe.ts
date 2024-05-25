import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
// transform function will convert the input data into new format/data
// first argument - data to be transformed
// second argument - based on which this transformation has to be done
  transform(allEmployee:any[],searchKey:string): any[] {
    const result:any=[]

    if(!allEmployee || searchKey==""){
      return allEmployee
    }
    // if data is present
    allEmployee.forEach((item:any)=>{
      // trim() - remove the white space
      // toLowerCase() - to convert into small letters
      if(item.username.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        // adding to result array
        result.push(item)
      }
    })
    return result
  }

}
