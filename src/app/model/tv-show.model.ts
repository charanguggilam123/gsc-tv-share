
export interface displayEntity {
  id: number
  name: string
  imagePath: string
}

export interface genre{
  id: number
  name: string
}

export interface movie extends displayEntity{
  description: string
  genres: genre[]
  rating: number

}

export interface TVShow extends displayEntity{
  genres: genre[]
  rating: number
  description: string
  seasonsCount: number
  totalEpisodes: number
}

export interface Episode{
  name: string
  duration: string
}

export interface seasons{
  seasonsNumber: number
  episodesCount: number
  episodeDetails: Episode[]

}

export interface listHTTP {
  pages: number
  results: any[]
}

export interface Person extends displayEntity{
  age: number
  filmography: (movie|TVShow)[]
}
