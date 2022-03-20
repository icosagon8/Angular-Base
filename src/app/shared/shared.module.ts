import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    ButtonComponent, ConfirmationDialogComponent, HeaderComponent, InfoComponent, SearchComponent
} from './components';
import { AnyWordCharacterValidatorDirective, EmailValidatorDirective } from './directives';
import { FortAwesomeModule } from './fort-awesome/fort-awesome.module';
import { CreationDatePipe, DurationPipe, StringJoinerPipe } from './pipes';

const COMPONENTS = [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    ConfirmationDialogComponent,
];
const PIPES = [DurationPipe, CreationDatePipe, StringJoinerPipe];
const DIRECTIVES = [EmailValidatorDirective, AnyWordCharacterValidatorDirective];

@NgModule({
    declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FortAwesomeModule],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FortAwesomeModule,
        ...COMPONENTS,
        ...PIPES,
        ...DIRECTIVES,
    ],
})
export class SharedModule {}
