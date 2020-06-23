import { Component, OnInit , OnChanges ,SimpleChanges } from '@angular/core';
import { PlayersService } from 'src/app/servirces/players.service';
import { PlayerInfo } from 'src/models/player';

@Component({
  selector: 'app-add-squad',
  templateUrl: './add-squad.component.html',
  styleUrls: ['./add-squad.component.css']
})
export class AddSquadComponent implements OnInit , OnChanges {

  squad : PlayerInfo[]
  constructor(private playersService : PlayersService) { }

  ngOnInit(): void {
    this.squad  = this.playersService.getSquad()
  }



  ngOnChanges = (changes:SimpleChanges) =>{
    const tt  = this.squad
    console.log(`flkdsjfldsjflkdjlfj`)
  }

}
