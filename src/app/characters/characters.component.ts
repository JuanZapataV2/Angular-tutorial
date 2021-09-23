import { Component, OnInit } from '@angular/core';


import{Character} from'../character';
import { CharacterService } from '../character.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters:Character[]=[];
  constructor(private characterService:CharacterService,
              private messageService: MessageService) { }

  selectedCharacter?: Character;
  onSelect(character: Character): void {
    this.selectedCharacter = character;
    this.messageService.add(`CharactersComponent: Selected character id=${character.id}`);
  }
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
        .subscribe(characters => this.characters = characters );
  }

}
