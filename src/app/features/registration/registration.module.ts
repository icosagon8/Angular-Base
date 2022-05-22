import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
    declarations: [RegistrationComponent],
    imports: [SharedModule, RegistrationRoutingModule],
})
export class RegistrationModule {}
