import { Component } from '@angular/core';
import { AnimalsService, AnimalType } from '../../services/animals.service';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.scss']
})
export class AnimalsPageComponent {
  title = 'Animals list'
  animals: AnimalType[] = []
  typeFilter: string = 'cat'
  typeSwitchState: boolean = false

  constructor (private animalsService: AnimalsService) {}

  ngOnInit () {
    this.animalsService.getAnimals(this.typeFilter, this.typeSwitchState).subscribe((response) => {
      this.animals = response
    })
  }

  submitAnimal(animal: Omit<AnimalType, 'id'>) {
    this.animalsService.postAnimal(animal).subscribe(() => {
      this.ngOnInit()
    })
  }

  deleteAnimal(id: string) {
    this.animalsService.deleteAnimal(id).subscribe(() => {
      this.ngOnInit()
    })
  }

  typeSwitchHandler(switchState: boolean) {
    this.typeSwitchState = switchState
    this.ngOnInit()
  }

  setTypeValue(type: string) {
    this.typeFilter = type

    if (this.typeSwitchState) {
      this.ngOnInit()
    }
  }
}
