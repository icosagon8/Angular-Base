import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent, HeaderComponent, InfoComponent, SearchComponent } from './components';
import { FortAwesomeModule } from './fort-awesome/fort-awesome.module';

const COMPONENTS = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [CommonModule, FortAwesomeModule],
    exports: [CommonModule, FortAwesomeModule, COMPONENTS],
})
export class SharedModule {}
