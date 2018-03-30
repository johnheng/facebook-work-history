import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'isCurrent'})
export class CurrentPipe implements PipeTransform {
  transform(value: string): string {
    if(value == "0000-00") {
      value = "Current";
    }
    return value;
  }
}