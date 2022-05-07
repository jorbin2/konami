import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Teams, Prepari } from '../../model/interface';
import { formatDate } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-preparie',
  templateUrl: './preparie.page.html',
  styleUrls: ['./preparie.page.scss'],
})
export class PrepariePage implements OnInit {

  constructor(public service: ServiceService,@Inject(LOCALE_ID) private locales: string,public storage:LocalStorageService) { 

  }
  listPrepari:Prepari[]=[]
  timeparie:string

  ngOnInit() {
    
    this.getAllParieSaved()
  
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.ngOnInit()
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
     
    }, 2000);
  }

getAllParieSaved(){
  var values:Prepari[] = [];

  var value:Prepari[] = [],
  keys = Object.keys(localStorage),
  i = keys.length;
  let lastitemstorage=i
  let live=formatDate(Date.now(),'dd.MM.yyyy',this.locales)

 values=JSON.parse(localStorage.getItem(""+lastitemstorage) );

   values?.map(p=>{
     if(p.duration==live){
      this.listPrepari.push(p)
     }
     else{
       this.service.keystr=0
  this.storage.clear()
    }
   }
  )
 





}

   /*getAllParieSaved(){
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    this.listPrepari= JSON.parse(localStorage.getItem( localStorage.key( i ) )); //forgot to close

} 
}
*/
}
