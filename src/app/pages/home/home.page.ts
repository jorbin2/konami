
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

import { Observable } from 'rxjs';

import { async } from '@angular/core/testing';
import { TeamMatchs } from '../../model/interface';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(@Inject(LOCALE_ID) private locales: string,private serviceSaison:ServiceService) {
 
this.serviceSaison.loading()
   }

allMatchs:Array<TeamMatchs>



  ngOnInit() {
this.onGetAllMatchs()
}

onGetAllMatchs(){
  this.serviceSaison.getAllMatchs().
  subscribe(data=>{
    this.allMatchs=data
    console.log(data)
  })
}


}
