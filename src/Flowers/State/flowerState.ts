import Error from '../../common/Error';
import { Flower, FavoriteFlower, FlowerPagination } from '../Flowers.d';

interface FlowerState {
  flowers: Flower[];
  loading: boolean;
  error: Error | null;
  favoriteFlowers: FavoriteFlower[];
  pagination: FlowerPagination | null;
}

export default FlowerState;
