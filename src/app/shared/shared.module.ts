import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FortAwesomeModule } from './fort-awesome/fort-awesome.module';

const COMPONENTS = [];

@NgModule({
    declarations: [],
    imports: [CommonModule, FortAwesomeModule],
    exports: [CommonModule, FortAwesomeModule],
})
export class SharedModule {}
