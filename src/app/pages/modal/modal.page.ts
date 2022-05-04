import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceService } from '../../services/service.service';
import { Teams } from '../../model/interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalCtrl: ModalController,public service:ServiceService) { }

  ngOnInit() {
this.showTeamsAdded()
  }
  dismiss() {  
    this.modalCtrl.dismiss();  
  }
  listAddTeam:Array<Teams>=[]
 

  showTeamsAdded(){
   
        this.listAddTeam=this.service.addteams
      
  
}
saveAddedTeamToParie(value:Array<Teams>){
  this.service.onSaveAddTeam(value)
}

}
