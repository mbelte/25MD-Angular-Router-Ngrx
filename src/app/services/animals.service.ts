import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export type AnimalType = {
  id: string;
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})

export class AnimalsService {

  constructor(private http:HttpClient) { }

  typeFilter: string = ''

  getAnimals(type: string, state: boolean) {
    if (state) {
      this.typeFilter = '?type=' + type
    } else {
      this.typeFilter = ''
    }
    
    return this.http.get<AnimalType[]>('http://localhost:3000/animal' + this.typeFilter)
  }

  postAnimal(data: Omit<AnimalType, 'id'>) {
    return this.http.post('http://localhost:3000/animal', data)
  }

  deleteAnimal(id: string) {
    return this.http.delete('http://localhost:3000/animal/' + id)
  }
}
