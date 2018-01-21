import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number, trail?: string) : string {
    let limitLength = limit || 10;
    let trailString = trail || '...';

    if (!value || !value.length) {
      return '';
    } else {
      return value.length > limitLength ? value.substring(0, limitLength).trim() + trailString : value;
    }
  }

}
