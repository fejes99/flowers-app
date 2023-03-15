import Flower from '../Flowers.d';

interface FlowerState {
  flowers: Flower[];
  loading: boolean;
  error: string | null;
}

export default FlowerState;
