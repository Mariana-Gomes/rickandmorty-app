export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  character: string[];
  url: string;
  created: string;
};

export type CharactersResult = {
  data: Character[];
  nextPage: number;
};

export type EpisodesResult = {
  data: Episode[];
  nextPage: number;
};
