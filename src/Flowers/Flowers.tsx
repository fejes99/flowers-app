import { connect } from 'react-redux';
import './Flowers.css';
import { Flower } from './Flowers.d';
import User from '../auth/Auth.d';
import FlowerList from './FlowerList/FlowerList';
import Search from '../common/components/Search/Search';
import { StoreState } from '../store/store';
import { fetchFlowers, addFavoriteFlower, fetchSearchFlowers } from './State/flowerActions';
import { useEffect } from 'react';

interface Props {
  user?: User | null;
  flowers: Flower[];
  loading: boolean;
  error: string | null;
  onFetchFlowers: () => void;
  onAddFavoriteFlower: (token: string, flowerId: string) => void;
  onFetchSearchFlowers: (query: string) => void;
}

const Flowers: React.FC<Props> = ({
  user,
  flowers,
  loading,
  error,
  onFetchFlowers,
  onAddFavoriteFlower,
  onFetchSearchFlowers,
}) => {
  useEffect(() => {
    onFetchFlowers();
  }, [onFetchFlowers]);

  const addFlower = (flowerId: string) => {
    if (user && user.token) onAddFavoriteFlower(user.token, flowerId);
  };

  return (
    <div className='flowers-container'>
      <Search onChange={onFetchSearchFlowers} />
      <FlowerList loading={loading} flowers={flowers} error={error} addFlower={addFlower} />
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    user: state.auth.user,
    flowers: state.flowers.flowers,
    loading: state.flowers.loading,
    error: state.flowers.error,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onFetchFlowers: () => dispatch(fetchFlowers()),
  onAddFavoriteFlower: (token: string, flowerId: string) =>
    dispatch(addFavoriteFlower(token, flowerId)),
  onFetchSearchFlowers: (query: string) => dispatch(fetchSearchFlowers(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flowers);
