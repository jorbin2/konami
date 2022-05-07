
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TeamMatchs, Teams, User, Prepari } from '../model/interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(@Inject(LOCALE_ID) private locales: string,private http:HttpClient,public storage:LocalStorageService,public loadingCtrl:LoadingController) {
 
   }

addteams:Array<Teams>=[]
addedteamtolist:Array<Teams>=[]
saveAddTeamListToParie: Array<Array<Teams>>=[]
listPrepari:Array<Prepari>=[]
datetimeparie: string
user:User
prepari:Prepari
keystr:number=0
  
  
  //getAll Seasons
 
 getAllMatchs():Observable<TeamMatchs[]>{
      
    return this.http.get<TeamMatchs[]>(this.url)

      }
     matchday = formatDate(Date.now(),'dd.MM.yyyy',this.locales);
     url:string="https://data.football-api.com/v3/matches?match_date="+this.matchday+"&Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b"
    
  
onAddTeams(addTeam:Teams){
  this.addteams.push(addTeam)

}

loading(){
  this.loadingCtrl.create({  
    message: 'Patienter...',  
    duration: 2000  
  }).then((res) => {   
    res.present();  
  res.onDidDismiss().then((dis) => {  
    console.log('Loading dismissed! after four Seconds');  
  });  
});
}

oncreatePrepari(value:Teams[]):Prepari{
  
  this.time() 
this.user=new User("jojo","jack","jojo@gmail.com","1234")
this.prepari= new Prepari(this.user,value,this.time(),formatDate(Date.now(),'dd.MM.yyyy',this.locales))
return this.prepari;

}
onCreatListPrepari(prepari:Prepari):Array<Prepari>{
 this.listPrepari.push(prepari);
 return this.listPrepari;
}

onSaveAddTeam(value:Teams[]){ 
  this.time()

this.saveAddTeamListToParie.push(value)
}
time():string{
  let datetime:Date = new Date()
 return datetime.toLocaleString()
}
savedatalocal(){
  this.keystr=this.keystr+1
  this.storage.setItem(""+this.keystr,this.listPrepari)


}

    }
    const apikey="cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b"
   