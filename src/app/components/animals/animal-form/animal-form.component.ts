import { Component, Output, EventEmitter } from '@angular/core';
import { AnimalType } from 'src/app/services/animals.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent {
  animaltypes = [
    'cat',
    'dog',
    'bird'
  ]

  form = new FormGroup({
    "name": new FormControl("", Validators.required),
    "type": new FormControl(this.animaltypes[0], Validators.required),
  });

  @Output() submitEvent:EventEmitter<Omit<AnimalType, 'id'>> = new EventEmitter();

  onSubmit() {
    this.submitEvent.emit({
      name: String (this.form.value.name),
      type: String (this.form.value.type)
    })

    this.form.reset({name: '', type: this.form.value.type})
  }

  @Output() selectEvent:EventEmitter<string> = new EventEmitter();

  onSelectChange(event: any) {
    this.selectEvent.emit(event.target.value)
  }
}
