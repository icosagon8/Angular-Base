import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appAnyWordCharacterValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: AnyWordCharacterValidatorDirective,
            multi: true,
        },
    ],
})
export class AnyWordCharacterValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return anyWordCharacterValidator(control);
    }
}

export function anyWordCharacterValidator(
    control: AbstractControl,
): ValidationErrors | null {
    const regex = /^[^\W_]+$/i;
    const anyWordCharacter = regex.test(control.value);

    return anyWordCharacter ? null : { forbiddenText: { value: control.value } };
}
