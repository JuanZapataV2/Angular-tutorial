import { Component, OnInit, Input} from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character?:Character;
  constructor(private route: ActivatedRoute,
              private characterService: CharacterService,
              private location: Location) { }
  
  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacter(id)
        .subscribe(character=>this.character=character);
  }

  goBack(): void {
    this.location.back();
  }
}
