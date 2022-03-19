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
    @Input('appEmailValidator') emailPattern = '';

    validate(control: AbstractControl): ValidationErrors | null {
        return emailValidator(this.emailPattern)(control);
    }
}

export function emailValidator(emailPattern: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const emailRe = new RegExp(emailPattern, 'i');
        const forbidden = !emailRe.test(control.value);

        return forbidden ? { forbiddenEmail: { value: control.value } } : null;
    };
}
