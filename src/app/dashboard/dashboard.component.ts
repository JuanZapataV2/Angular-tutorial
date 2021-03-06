import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters:Character[]=[];
  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.characterService.getCharacters()
        .subscribe(characters => this.characters = characters.slice(0,5) );
  }

}
