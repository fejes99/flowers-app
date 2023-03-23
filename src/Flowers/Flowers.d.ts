export interface Flower {
  id: string;
  favorite: boolean;
  name: string;
  latin_name: string;
  profile_picture: string;
  sightings: string;
}

export interface FavoriteFlower {
  id: string;
  user_id: string;
  flower: Flower;
}

export interface FetchFlowersData {
  flowers: Flower[];
  meta: Meta;
}

interface Meta {
  pagination: FlowerPagination;
}

export interface FlowerPagination {
  current_page: number;
  next_page: number;
  prev_page: number | null;
  total_pages: 6;
}
