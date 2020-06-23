import { Component, OnInit , Input , OnChanges , SimpleChanges } from '@angular/core';
import { PlayerInfo } from 'src/models/player';
import {PlayersService} from '../../servirces/players.service'

@Component({
  selector: 'app-add-player-to-squad',
  templateUrl: './add-player-to-squad.component.html',
  styleUrls: ['./add-player-to-squad.component.css']
})
export class AddPlayerToSquadComponent implements OnInit , OnChanges  {

  @Input() player : PlayerInfo;
  constructor(private playersService : PlayersService) { }

  ngOnInit(): void {
    this.playersService.getSquad()
  }


  ngOnChanges = (changes:SimpleChanges) =>{
    const squad  = this.playersService.getSquad()
    console.log(squad)
  }
  
  onDelete = (play) =>{
    this.playersService.deletePlayer(play.id)
  }


}
