import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringJoiner',
    pure: false,
})
export class StringJoinerPipe implements PipeTransform {
    transform(value: string[], separator: string): unknown {
        return value.join(separator);
    }
}
