import { Saisons } from './interfaceSaisons';
export class clSaison implements Saisons{
    season_id: number;
    name: string;
    is_current: number;
    country_id: number;
    league_id: number;
    start_date: string;
    end_date: string;
    
}