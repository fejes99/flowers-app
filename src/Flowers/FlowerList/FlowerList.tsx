import './FlowerList.css';
import { Flower } from '../Flowers.d';
import FlowerCard from '../../common/components/FlowerCard/FlowerCard';
import Loader from '../../common/components/Loader/Loader';
import { Error } from '../../common/Error';

interface Props {
  loading: boolean;
  flowers: Flower[];
  error: Error | null;
  addEnabled: boolean;
  addFlower: (flower: Flower) => void;
  removeFlower: (flower: Flower) => void;
}

const FlowerList: React.FC<Props> = ({
  loading,
  flowers,
  error,
  addEnabled,
  addFlower,
  removeFlower,
}) => {
  if (loading) return <Loader />;
  if (error) return <div>{error.message}</div>;
  if (!flowers.length) return <div>No flowers</div>;

  const handleClick = (flower: Flower) => {
    !!flower.favorite ? removeFlower(flower) : addFlower(flower);
  };

  let flowerCards: JSX.Element[] =
    flowers &&
    flowers.map((flower: Flower) => (
      <FlowerCard
        key={flower.id}
        flower={flower}
        enabled={addEnabled}
        onClick={() => handleClick(flower)}
      />
    ));

  return <div className='flower-list'>{flowerCards}</div>;
};

export default FlowerList;
