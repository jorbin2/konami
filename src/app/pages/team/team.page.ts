import { Teams } from './../../model/interface';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ModalController, ToastController } from '@ionic/angular';
 import { LoadingController } from '@ionic/angular'; 
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  constructor(private service: ServiceService,public toastController:ToastController ,
    public loadingCtrl:LoadingController,public modalCtrl: ModalController) { 

    this.service.loading()

    this.remove()

  }

allteams_local:Array<Teams>=[]
allteams_visitor:Array<Teams>=[]
team_local:Teams
team_visitor:Teams
team_added:Array<Teams>=[]
sizeList:number=0
test:boolean=false

  ngOnInit() {
    this.onGetAllTeams()
  }

  onGetAllTeams(){
    this.service.getAllMatchs().
subscribe(data=>{
  
data.map(t=>{
  console.log(t)
  this.team_local= new Teams(t.localteam_name,t.localteam_score,t.status,t.time,t.formatted_date,t.localteam_id)
  this.team_visitor= new Teams(t.visitorteam_name,t.localteam_score,t.status,t.formatted_date,t.time,t.localteam_id)
  this.allteams_local.push(this.team_local)
  this.allteams_local.push( this.team_visitor)

})
})
  }

async  addTeam(value:Teams){

  if(this.service.addteams.length!==2) {

  

    if(this.service.addteams.indexOf(value)!== -1){
     
        const toast = await this.toastController.create({
          message: 'existe dèja',
          duration: 1000
     
      
      })
      toast.present();
      
    }else{
      this.service.onAddTeams(value);
    }
  }else{
    const toast2 = await this.toastController.create({
      message: 'taille <= 2',
      duration: 1000
  })
  toast2.present();
}
          this.team_added=this.service.addteams
         

    this.sizeList= this.team_added.length
    this.ifexiste()
 

  }
  
  

  remove() {
    this.service.addteams = this.service.addteams.filter(item => item !== item);
}

ifexiste(){
  if(this.sizeList!==0)
this.test=true
}

viewList(){

}

addToList(){

}

async showModal() {  
  const modal = await this.modalCtrl.create({  
    component: ModalPage  
  });  
  return await modal.present();   
}  

}
