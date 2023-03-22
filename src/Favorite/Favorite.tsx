import { useEffect } from 'react';
import { connect } from 'react-redux';
import User from '../auth/Auth';
import Loader from '../common/components/Loader/Loader';
import { Error } from '../common/Error';
import { FavoriteFlower } from '../Flowers/Flowers.d';
import {
  fetchFavoriteFlowers,
  removeFavoriteFlowerAndFetchFavoriteFlowers,
} from '../Flowers/State/flowerActions';
import { AppDispatch, StoreState } from '../store/store';
import FavoriteList from './FavoriteList/FavoriteList';

interface Props {
  user: User | null;
  flowers: FavoriteFlower[];
  loading: boolean;
  error: Error | null;
  onFetchFavoriteFlowers: (token: string) => void;
  onRemoveFavoriteFlower: (token: string, flowerId: string, favoriteFlowerId: string) => void;
}

const Favorite: React.FC<Props> = ({
  user,
  flowers,
  loading,
  error,
  onFetchFavoriteFlowers,
  onRemoveFavoriteFlower,
}) => {
  useEffect(() => {
    if (user && user.token) onFetchFavoriteFlowers(user.token);
  }, [onFetchFavoriteFlowers, user]);

  if (!user) return <h1>You must be logged in!</h1>;
  if (loading) return <Loader />;
  if (error) return <div>{error.message}</div>;
  if (!flowers.length) return <div>No flowers</div>;

  const removeFromFavorites = (favoriteFlower: FavoriteFlower) => {
    if (user && user.token)
      onRemoveFavoriteFlower(user.token, favoriteFlower.flower.id, favoriteFlower.id);
  };
  return (
    <div>
      <FavoriteList flowers={flowers} removeFlower={removeFromFavorites} />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => ({
  user: state.auth.user,
  flowers: state.flowers.favoriteFlowers,
  loading: state.flowers.loading,
  error: state.flowers.error,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onFetchFavoriteFlowers: (token: string) => dispatch(fetchFavoriteFlowers(token)),
  onRemoveFavoriteFlower: (token: string, flowerId: string, favoriteFlowerId: string) => {
    dispatch(removeFavoriteFlowerAndFetchFavoriteFlowers(token, flowerId, favoriteFlowerId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
