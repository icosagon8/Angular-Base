import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    ButtonComponent,
    ConfirmationDialogComponent,
    HeaderComponent,
    InfoComponent,
    SearchComponent,
} from './components';
import { EmailValidatorDirective } from './directives';
import { FortAwesomeModule } from './fort-awesome/fort-awesome.module';
import { DurationPipe } from './pipes';

const COMPONENTS = [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    ConfirmationDialogComponent,
];
const PIPES = [DurationPipe];
const DIRECTIVES = [EmailValidatorDirective];

@NgModule({
    declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
    imports: [CommonModule, FortAwesomeModule],
    exports: [CommonModule, FortAwesomeModule, ...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class SharedModule {}
