import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appShowPassword]',
    exportAs: 'appShowPassword',
})
export class ShowPasswordDirective {
    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    toggle() {
        const type = this.elRef.nativeElement.type === 'text' ? 'password' : 'text';
        this.renderer.setAttribute(this.elRef.nativeElement, 'type', type);
    }
}
