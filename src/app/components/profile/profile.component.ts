import { Component, OnInit , Input } from '@angular/core';
import { PlayerInfo } from 'src/models/player';
import { PlayersService } from 'src/app/servirces/players.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() player : PlayerInfo;
  modal:boolean;

  constructor(private playersService : PlayersService) { }

  ngOnInit(): void {
    this.modal= this.playersService.getModal();
  }


  
  addPlayer = (player) =>{
    this.playersService.addPlayer(player.id)
  }

  onAddPlayer = player => {
    this.playersService.addPlayer(player.id)
  }


  viewPlayer = () =>{
    this.modal = this.playersService.modalOpen();
  }


  onCloseModal = (modal) => {
    this.modal = modal;
  }

}
