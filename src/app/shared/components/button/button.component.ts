import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'button[common-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() text?: string;
    @Input() iconName?: IconProp;

    constructor(faConfig: FaConfig) {
        faConfig.fixedWidth = true;
    }
}
