import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent, HeaderComponent, InfoComponent, SearchComponent } from './components';
import { FortAwesomeModule } from './fort-awesome/fort-awesome.module';
import { DurationPipe } from './pipes';

const COMPONENTS = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent];
const PIPES = [DurationPipe];

@NgModule({
    declarations: [...COMPONENTS, ...PIPES],
    imports: [CommonModule, FortAwesomeModule],
    exports: [CommonModule, FortAwesomeModule, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
