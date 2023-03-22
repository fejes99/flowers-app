import { FavoriteFlower } from '../../Flowers/Flowers.d';
import FlowerCard from '../../common/components/FlowerCard/FlowerCard';

interface Props {
  flowers: FavoriteFlower[];
  removeFlower: (favoriteFlower: FavoriteFlower) => void;
}

const FavoriteList: React.FC<Props> = ({ flowers, removeFlower }) => {
  let flowerCards: JSX.Element[] =
    flowers &&
    flowers.map((favoriteFlower: FavoriteFlower) => (
      <FlowerCard
        key={favoriteFlower.id}
        flower={favoriteFlower.flower}
        enabled={true}
        onClick={() => removeFlower(favoriteFlower)}
      />
    ));

  return <div className='flower-list'>{flowerCards}</div>;
};

export default FavoriteList;
