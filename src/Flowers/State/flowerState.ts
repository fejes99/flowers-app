import { Flower, FavoriteFlower } from '../Flowers.d';

interface FlowerState {
  flowers: Flower[];
  loading: boolean;
  error: string | null;
  favoriteFlowers: FavoriteFlower[];
}

export default FlowerState;
