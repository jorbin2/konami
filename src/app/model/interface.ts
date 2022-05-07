export interface TeamMatchs {
    id: string;
    comp_id: string;
    formatted_date: string;
    season: string;
    venue: string;
    venue_id: string;
    venue_city: string;
    status: string;
    timer?: any;
    time: string;
    localteam_id: string;
    localteam_name: string;
    localteam_score: string;
    visitorteam_id: string;
    visitorteam_name: string;
    visitorteam_score: string;
    ht_score: string;
    ft_score: string;
    et_score?: any;
    penalty_local?: any;
    penalty_visitor?: any;
    events: Event[];
    week?: string;
  }
  
  interface Event {
    id: string;
  
    minute: string;
    extra_min?: (null | string)[];
    team: string;
    player: string;
    player_id?: string | string;
    assist?: string | string;
    assist_id?: string;
    result?: string;
  }
  export class Teams{
    status: string;
    timer?: any;
    time: string;
    localteam_id: string;
  team_name: string;
    localteam_score: string;
  
    formatted_date: string;



	constructor(local_name:string,local_score:string,status:string,time:string,date:string, localteam_id: string) {
    this.team_name=local_name;
  
    this.localteam_score=local_score;
   
    this.status=status;
    this.time=time;
    this.formatted_date=date;
    this.localteam_id=localteam_id
   
	}


  }

  export class User{
    id:string
    nom:string
    prenom:string
    email:string
    passwd:string
    montant:number
    pays:string

	constructor(n:string,p:string,e:string,passwd:string) {
    this.nom=n;
    this.prenom=p;
    this.email=e;
    this.passwd=passwd;
    this.montant=0
	}


  }
  export class Prepari{


	constructor(u:User,t:Array<Teams>,d:string,dur:string) {
    this.user=u;
    this.teams=t;
    this.datetimepari=d;
    this.duration=dur
	}
    user:User
    teams:Array<Teams>
    datetimepari:string
    duration:string

  }