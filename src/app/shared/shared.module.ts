import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    ButtonComponent, ConfirmationDialogComponent, HeaderComponent, InfoComponent, SearchComponent
} from './components';
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

@NgModule({
    declarations: [...COMPONENTS, ...PIPES],
    imports: [CommonModule, FortAwesomeModule],
    exports: [CommonModule, FortAwesomeModule, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
