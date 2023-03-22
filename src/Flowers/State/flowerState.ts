import Error from '../../common/Error';
import { Flower, FavoriteFlower } from '../Flowers.d';

interface FlowerState {
  flowers: Flower[];
  loading: boolean;
  error: Error | null;
  favoriteFlowers: FavoriteFlower[];
}

export default FlowerState;
