import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'year'})
export class WorkYearPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('-')[0];
  }
}