import './FlowerList.css';
import { Flower } from '../Flowers.d';
import FlowerCard from '../../common/components/FlowerCard/FlowerCard';
import Loader from '../../common/components/Loader/Loader';

interface Props {
  loading: boolean;
  flowers: Flower[];
  error: string | null;
  addFlower: (flowerId: string) => void;
}

const FlowerList: React.FC<Props> = ({ loading, flowers, error, addFlower }) => {
  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;
  if (!flowers.length) return <div>No flowers</div>;

  const addToFavorites = (flowerId: string) => {
    addFlower(flowerId);
  };

  let flowerCards: JSX.Element[] =
    flowers &&
    flowers.map((flower: Flower) => (
      <FlowerCard key={flower.id} flower={flower} onClick={() => addToFavorites(flower.id)} />
    ));

  return <div className='flower-list'>{flowerCards}</div>;
};

export default FlowerList;
