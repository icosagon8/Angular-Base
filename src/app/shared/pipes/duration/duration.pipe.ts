import { Pipe, PipeTransform } from '@angular/core';

import { padStartZero } from '../../utils';

@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {
    transform(value: number, maxLength: number): string {
        const hours = Math.trunc(value / 60);
        const minutes = value % 60;
        const units = hours < 2 ? 'hour' : 'hours';

        return `${padStartZero(hours, maxLength)}:${padStartZero(
            minutes,
            maxLength,
        )} ${units}`;
    }
}
