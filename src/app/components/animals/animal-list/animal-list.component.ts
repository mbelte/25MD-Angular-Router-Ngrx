import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnimalType } from 'src/app/services/animals.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent {

  @Input() animals: AnimalType[]
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter();

  deleteHandler(id: string) {
    this.deleteEvent.emit(id)
  }
}
