import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {
    @Input() title!: string;
    @Input() message!: string;
    @Input() okButtonText!: string;
    @Input() cancelButtonText!: string;

    @Output() confirm = new EventEmitter();
    @Output() close = new EventEmitter();

    onConfirm() {
        this.confirm.emit();
    }

    onClose() {
        this.close.emit();
    }
}
