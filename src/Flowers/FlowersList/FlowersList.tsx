import { useEffect } from 'react';
import { connect } from 'react-redux';

import './FlowersList.css';
import Flower from '../Flowers.d';
import { fetchFlowers } from '../State/flowerActions';
import FlowerCard from './FlowerCard/FlowerCard';

interface Props {
  flowers: Flower[];
  loading: boolean;
  error: string | null;
  onFetchFlowers: () => void;
}

const FlowersList = ({ flowers, loading, error, onFetchFlowers }: Props) => {
  useEffect(() => {
    onFetchFlowers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;
  if (!flowers.length) return <div>No flowers</div>;

  let flowerCards = flowers && flowers.map((flower: Flower) => <FlowerCard flower={flower} />);

  return <div className='flowers-list'>{flowerCards}</div>;
};

const mapStateToProps = (state: any) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FlowersList);
