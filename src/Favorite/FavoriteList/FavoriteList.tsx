import { useEffect } from 'react';
import { connect } from 'react-redux';
import User from '../../auth/Auth';
import FlowerCard from '../../common/components/FlowerCard/FlowerCard';
import Loader from '../../common/components/Loader/Loader';
import { FavoriteFlower } from '../../Flowers/Flowers.d';
import { fetchFavoriteFlowers, removeFavoriteFlower } from '../../Flowers/State/flowerActions';
import { StoreState } from '../../store/store';

interface Props {
  user: User | null;
  flowers: FavoriteFlower[];
  loading: boolean;
  error: any;
  onFetchFavoriteFlowers: (token: string) => void;
  onRemoveFavoriteFlower: (token: string, flowerId: string, favoriteFlowerId: string) => void;
}

const FavoriteList: React.FC<Props> = ({
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
  if (error) return <div>{error}</div>;
  if (!flowers.length) return <div>No flowers</div>;

  const removeFromFavorites = (flowerId: string, favoriteFlowerId: string, token?: string) => {
    if (token && user) onRemoveFavoriteFlower(token, flowerId, favoriteFlowerId);
  };

  let flowerCards: JSX.Element[] =
    flowers &&
    flowers.map((favoriteFlower: FavoriteFlower) => (
      <FlowerCard
        key={favoriteFlower.id}
        flower={favoriteFlower.flower}
        onClick={() =>
          user && removeFromFavorites(favoriteFlower.flower.id, favoriteFlower.id, user.token)
        }
      />
    ));

  return <div className='flower-list'>{flowerCards}</div>;
};

const mapStateToProps = (state: StoreState) => ({
  user: state.auth.user,
  flowers: state.flowers.favoriteFlowers,
  loading: state.flowers.loading,
  error: state.flowers.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  onFetchFavoriteFlowers: (token: string) => dispatch(fetchFavoriteFlowers(token)),
  onRemoveFavoriteFlower: (token: string, flowerId: string, favoriteFlowerId: string) => {
    dispatch(removeFavoriteFlower(token, flowerId, favoriteFlowerId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
