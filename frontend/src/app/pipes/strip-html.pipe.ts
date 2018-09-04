import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(value: string): any {
    if (value) {
      return value.replace(/<\/?[^>]+>/gi, '');
    }

    return value;
  }

}
