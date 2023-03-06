import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.scss']
})
export class AnimalListItemComponent {

  @Input() id: string
  @Input() name: string
  @Input() type: string
}
