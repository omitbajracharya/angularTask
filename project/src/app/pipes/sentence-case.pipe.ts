import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase'
})

export class SentenceCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]):string {
    return `${args[0]} ${args[1]} ${value.charAt(0).toLocaleUpperCase()}${value.slice(1).toLocaleLowerCase()}`;
  }
}
