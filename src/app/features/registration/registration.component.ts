import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/directives';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    form!: FormGroup;

    ngOnInit(): void {
        this.createForm();
    }

    onSubmit() {
        console.log(this.form.value);
    }

    get name() {
        return this.form.get('name');
    }

    get email() {
        return this.form.get('email');
    }

    get password() {
        return this.form.get('password');
    }

    private createForm() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(6)]),
            email: new FormControl('', [
                Validators.required,
                emailValidator('^(.+)@(.+)$'),
            ]),
            password: new FormControl('', [Validators.required]),
        });
    }
}
