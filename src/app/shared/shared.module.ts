import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    imports: [CommonModule, FormsModule, FortAwesomeModule],
    exports: [
        CommonModule,
        FormsModule,
        FortAwesomeModule,
        ...COMPONENTS,
        ...PIPES,
        ...DIRECTIVES,
    ],
})
export class SharedModule {}
