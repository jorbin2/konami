export interface Root {
  query: Query
  data: Daum[]
}

export interface Query {
  apikey: string
  league_id: string
}

export interface Daum {
  season_id?: number
  name?: string
  is_current?: number
  country_id: number
  league_id: number
  start_date: string
  end_date?: string
}

