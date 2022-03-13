import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
    ValidatorFn,
} from '@angular/forms';

@Directive({
    selector: '[appEmailValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailValidatorDirective,
            multi: true,
        },
    ],
})
export class EmailValidatorDirective implements Validator {
    @Input('appEmailValidator') emailRe: RegExp = /^(.+)@(.+)$/;

    validate(control: AbstractControl): ValidationErrors | null {
        return emailValidator(this.emailRe)(control);
    }
}

export function emailValidator(emailRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = !emailRe.test(control.value);

        return forbidden ? { forbiddenEmail: { value: control.value } } : null;
    };
}
