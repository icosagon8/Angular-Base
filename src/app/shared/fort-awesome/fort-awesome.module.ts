import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [],
    imports: [FontAwesomeModule],
    exports: [FontAwesomeModule],
})
export class FortAwesomeModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faPen, faTrash, faWindowClose);
    }
}
