import { Pipe, PipeTransform } from '@angular/core';

import { padStartZero } from '../../utils';

@Pipe({
    name: 'creationDate',
})
export class CreationDatePipe implements PipeTransform {
    transform(value: Date): string {
        const DD = padStartZero(value.getDate(), 2);
        const MM = padStartZero(value.getMonth() + 1, 2);
        const YYYY = padStartZero(value.getFullYear(), 4);

        return `${DD}.${MM}.${YYYY}`;
    }
}
