import { connect } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch, StoreState } from '../store/store';
import {
  fetchFlowers,
  fetchSearchFlowers,
  addFavoriteFlowerAndFetchFavoriteFlowers,
  removeFavoriteFlowerAndFetchFavoriteFlowers,
} from './State/flowerActions';
import { FavoriteFlower, Flower } from './Flowers.d';
import User from '../auth/Auth.d';
import Error from '../common/Error';
import FlowerList from './FlowerList/FlowerList';
import Search from '../common/components/Search/Search';
import Pagination from '../common/components/Pagination/Pagination';

interface Props {
  user?: User | null;
  flowers: Flower[];
  favoriteFlowers: FavoriteFlower[];
  loading: boolean;
  error: Error | null;
  onFetchFlowers: () => void;
  onAddFavoriteFlower: (token: string, flowerId: string) => void;
  onRemoveFavoriteFlower: (token: string, flowerId: string, favoriteFlowerId: string) => void;
  onFetchSearchFlowers: (query: string) => void;
}

const Flowers: React.FC<Props> = ({
  user,
  flowers,
  favoriteFlowers,
  loading,
  error,
  onFetchFlowers,
  onAddFavoriteFlower,
  onRemoveFavoriteFlower,
  onFetchSearchFlowers,
}) => {
  useEffect(() => {
    onFetchFlowers();
  }, [onFetchFlowers]);

  const addFlower = (flower: Flower) => {
    if (user && user.token && !flower.favorite) onAddFavoriteFlower(user.token, flower.id);
  };

  const getFavoriteFlowerId = (flowerId: string, favoriteFlowers: FavoriteFlower[]) => {
    const favoriteFlower = favoriteFlowers.find(
      (favoriteFlower) => favoriteFlower.flower.id === flowerId
    );
    return favoriteFlower ? favoriteFlower.id : '';
  };

  const removeFlower = (flower: Flower) => {
    if (user && user.token) {
      const favoriteFlowerId = getFavoriteFlowerId(flower.id, favoriteFlowers);
      onRemoveFavoriteFlower(user.token, flower.id, favoriteFlowerId);
    }
  };

  const filterFavoriteFlowers = (
    flowers: Flower[],
    favoriteFlowers: FavoriteFlower[]
  ): Flower[] => {
    const favoriteFlowerIds = new Set<string>(
      favoriteFlowers.map((favoriteFlower) => favoriteFlower.flower.id)
    );
    return flowers.map((flower) => {
      if (favoriteFlowerIds.has(flower.id)) {
        return { ...flower, favorite: true };
      } else {
        return { ...flower };
      }
    });
  };

  const updatedFlowers = filterFavoriteFlowers(flowers, favoriteFlowers);

  return (
    <div>
      <Search onChange={onFetchSearchFlowers} />
      <div className='main'>
        <Pagination />
        <FlowerList
          loading={loading}
          flowers={updatedFlowers}
          error={error}
          addEnabled={!!user}
          addFlower={addFlower}
          removeFlower={removeFlower}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    user: state.auth.user,
    flowers: state.flowers.flowers,
    favoriteFlowers: state.flowers.favoriteFlowers,
    loading: state.flowers.loading,
    error: state.flowers.error,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onFetchFlowers: () => dispatch(fetchFlowers()),
  onAddFavoriteFlower: (token: string, flowerId: string) =>
    dispatch(addFavoriteFlowerAndFetchFavoriteFlowers(token, flowerId)),
  onRemoveFavoriteFlower: (token: string, flowerId: string, favoriteFlowerId: string) =>
    dispatch(removeFavoriteFlowerAndFetchFavoriteFlowers(token, flowerId, favoriteFlowerId)),
  onFetchSearchFlowers: (query: string) => dispatch(fetchSearchFlowers(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flowers);
