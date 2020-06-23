import { Component, OnInit , Input , Output ,EventEmitter } from '@angular/core';
import { PlayerInfo } from 'src/models/player';
import {PlayersService} from '../../servirces/players.service'



@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {

  players : PlayerInfo[];
  constructor(private playersService : PlayersService) { }

  ngOnInit(){
    this.players = this.playersService.getPlayers();
    console.log(this.players)
  }



}
