import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { RegistrationComponent } from './registration.component';

@NgModule({
    declarations: [RegistrationComponent],
    imports: [SharedModule],
    exports: [RegistrationComponent],
})
export class RegistrationModule {}
