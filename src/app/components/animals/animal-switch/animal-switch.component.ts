import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-switch',
  templateUrl: './animal-switch.component.html',
  styleUrls: ['./animal-switch.component.scss']
})
export class AnimalSwitchComponent {
  isChecked: boolean = false

  @Input() typeFilter: string
  @Output() switchEvent: EventEmitter<boolean> = new EventEmitter();

  switchHandler () {
    this.isChecked = !this.isChecked;
    this.switchEvent.emit(this.isChecked);
  }
}
