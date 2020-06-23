import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {PlayerInfo} from '../../models/player';
import {liverPool_Players} from '../../info'


@Injectable({
  providedIn: "root",
})
export class PlayersService {
  players: PlayerInfo[] = new Array();
  squad: PlayerInfo[] = new Array();
  tempPlayers: PlayerInfo[] = new Array();
  singPlayer = {};
  openModal = false;
  count = 0;

  constructor(private httpClient: HttpClient) {}

  getPlayers = () => {
    this.setPlayers();
    return this.players;
  };

  getSquad = () => {
    console.log(this.squad);
    return this.squad;
  };

  getModal = () => {
    return this.openModal;
  };

  getPlayer = () => {
    return this.singPlayer;
  };

  addPlayer = (id) => {
    const player = this.players.find((player) => player.id === id);
    player.startMatch = true;
    this.squad = [...this.squad, player];
    this.count = this.count + 1;
    console.log(this.squad);
    console.log(this.count);
    this.MaximumNumberOfPlayers();
  };

  // delete player from an array and ui
  deletePlayer = (id) => {
    let players = [...this.squad];
    const player = this.squad.find((player) => player.id === id);
    let index = players.indexOf(player);
    player.startMatch = false;
    this.count = this.count - 1;
    this.squad.splice(index, 1);
    console.log(this.squad);
    console.log(this.count);
    this.substudeIfmaxPlayer();
  };
  // view single  player from modal
  viewPlayer = (id) => {
    const player = this.players.find((player) => player.id === id);
    this.singPlayer = player;
    console.log(this.singPlayer);
  };

  modalOpen = () => {
    return (this.openModal = true);
  };

  modalClose = () => {
    return (this.openModal = false);
  };

  setPlayers = () => {
    this.players = [...liverPool_Players];
  };

  // deselect player that were not previously selected if you remove from the maximum number of players
  substudeIfmaxPlayer = () => {
    if (this.count <= 11 && this.tempPlayers !== null) {
      this.tempPlayers.forEach((player) => {
        player.startMatch = false;
      });
    }
  };

  // check if players equal to 11    if  true prevent player from selecting player 
  MaximumNumberOfPlayers = () => {
    if (this.count === 11) {
      this.players.map((player) => {
        if (!player.startMatch) {
          player.startMatch = true;
          this.tempPlayers = [...this.tempPlayers, player];
          console.log(this.tempPlayers);
        }
      });
    }
  };
}
