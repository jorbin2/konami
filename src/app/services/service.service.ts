
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TeamMatchs, Teams } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(@Inject(LOCALE_ID) private locales: string,private http:HttpClient,public loadingCtrl:LoadingController) {
 
   }

addteams:Array<Teams>=[]
addedteamtolist:Array<Teams>=[]
saveAddTeamListToParie:                  Array<Array<Teams>>=[]
datetimeparie: Date

  
  
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

onSaveAddTeam(value:Teams[]){
  this.datetimeparie=new Date()
this.saveAddTeamListToParie.push(value)
}

    }
    const apikey="cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b"
   