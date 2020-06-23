import { Component, OnInit ,EventEmitter , Output , Input } from '@angular/core';
import {PlayersService} from '../../servirces/players.service'
import { PlayerInfo } from 'src/models/player';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit {
  @Input() player;
  modal:boolean;
  @Output() onCloseModal : EventEmitter<boolean> =  new EventEmitter()
  @Output() onAddPlayer : EventEmitter<PlayerInfo> =  new EventEmitter()

  constructor(private playersService :PlayersService) { }

  ngOnInit(): void {}

  onClose = () => {
    this.modal = this.playersService.modalClose();
    console.log(this.modal)
    this.onCloseModal.emit(this.modal);
  }

  onAdd = (player) => {
    this.onAddPlayer.emit(player)
  }
}
