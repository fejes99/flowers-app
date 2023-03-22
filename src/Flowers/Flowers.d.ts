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
