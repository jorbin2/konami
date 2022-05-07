import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ServiceService } from '../../services/service.service';
import { Teams, Prepari } from '../../model/interface';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalCtrl: ModalController,public service:ServiceService,public storage:LocalStorageService,public toastController:ToastController) { }

  ngOnInit() {
this.showTeamsAdded()
  }

  storageName: string | undefined;
  storageObject: Object = {};

  listAddTeam:Array<Teams>=[]
  prepari:Prepari
  preparilist:Array<Prepari>=[]
  dismiss() {  
    this.modalCtrl.dismiss();  
  }

 

  showTeamsAdded(){
   
        this.listAddTeam=this.service.addteams
      
  
}
  async saveAddedTeamToParie(value:Array<Teams>){
  this.service.time()
  this.prepari=this.service.oncreatePrepari(value)
  this.service.onCreatListPrepari(this.prepari)
  this.service.savedatalocal()
   
  
  const toast2 = await this.toastController.create({
    message: 'added',
    duration: 1000
})
toast2.present();
}

}
