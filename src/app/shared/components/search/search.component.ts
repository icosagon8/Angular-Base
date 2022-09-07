import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    @Input() placeholder = '';

    @Output() search = new EventEmitter<string>();

    searchText = '';

    onSubmit(): void {
        this.search.emit(this.searchText);
    }
}
