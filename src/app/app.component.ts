import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
 import { LoadingController } from '@ionic/angular'; 


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public navctrl:NavController
    , public loadingCtrl:LoadingController) {}

  pageDepot(){
    
    this.navctrl.navigateRoot("/depot")
  }
  pageHome(){
    
    this.navctrl.navigateRoot("/")
  }
   pageEquipe(){
    this.navctrl.navigateRoot("/team")
  }
  pageParie(){
    this.navctrl.navigateRoot("/preparie")
  }
}


