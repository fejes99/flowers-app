import { useEffect } from 'react';
import { connect } from 'react-redux';

import './FlowerList.css';
import Flower from '../Flowers.d';
import { fetchFlowers } from '../State/flowerActions';
import FlowerCard from '../../common/components/FlowerCard/FlowerCard';
import Loader from '../../common/components/Loader/Loader';
import { StoreState } from '../../store/store';

interface Props {
  flowers: Flower[];
  loading: boolean;
  error: string | null;
  onFetchFlowers: () => void;
}

const FlowerList: React.FC<Props> = ({ flowers, loading, error, onFetchFlowers }) => {
  useEffect(() => {
    onFetchFlowers();
  }, [onFetchFlowers]);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;
  if (!flowers.length) return <div>No flowers</div>;

  let flowerCards: JSX.Element[] =
    flowers && flowers.map((flower: Flower) => <FlowerCard key={flower.id} flower={flower} />);

  return <div className='flower-list'>{flowerCards}</div>;
};

const mapStateToProps = (state: StoreState) => {
  return {
    flowers: state.flowers.flowers,
    loading: state.flowers.loading,
    error: state.flowers.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetchFlowers: () => dispatch(fetchFlowers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowerList);
