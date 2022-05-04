import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Teams } from '../../model/interface';

@Component({
  selector: 'app-preparie',
  templateUrl: './preparie.page.html',
  styleUrls: ['./preparie.page.scss'],
})
export class PrepariePage implements OnInit {

  constructor(public service: ServiceService) { }
  listParie:Array<Array<Teams>>=[]
  timeparie:Date

  ngOnInit() {
    this.listParie=this.service.saveAddTeamListToParie
    this.timeparie=this.service.datetimeparie
  }
saveall(){}
}
