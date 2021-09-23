import { Injectable } from '@angular/core';
import { CHARACTERS } from './mock-characters';
import { Character } from './character';
import { MessageService } from './message.service';
import { Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private messageService : MessageService) { }

  getCharacters():Observable<Character[]>{
    const characters = of(CHARACTERS);
    this.messageService.add('CharacterService: fetched characters');
    return characters;
  }
}
