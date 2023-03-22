import { FavoriteFlower } from '../../Flowers/Flowers.d';
import FlowerCard from '../../common/components/FlowerCard/FlowerCard';

interface Props {
  flowers: FavoriteFlower[];
  removeFlower: (flowerId: string, favoriteFlowerId: string) => void;
}

const FavoriteList: React.FC<Props> = ({ flowers, removeFlower }) => {
  let flowerCards: JSX.Element[] =
    flowers &&
    flowers.map((favoriteFlower: FavoriteFlower) => (
      <FlowerCard
        key={favoriteFlower.id}
        flower={favoriteFlower.flower}
        onClick={() => removeFlower(favoriteFlower.flower.id, favoriteFlower.id)}
      />
    ));

  return <div className='flower-list'>{flowerCards}</div>;
};

export default FavoriteList;
