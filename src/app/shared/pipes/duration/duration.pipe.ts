import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {
    transform(value: number, maxLength: number): string {
        const hours = Math.trunc(value / 60);
        const minutes = value % 60;
        const units = hours < 2 ? 'hour' : 'hours';

        return `${this.padStartZero(hours, maxLength)}:${this.padStartZero(
            minutes,
            maxLength,
        )} ${units}`;
    }

    private padStartZero(value: number, maxLength: number): string {
        return String(value).padStart(maxLength, '0');
    }
}
