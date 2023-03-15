import './Flowers.css';
import Search from '../components/Search/Search';
import FlowersList from './FlowersList/FlowersList';

type Props = {};

const Flowers = (props: Props) => {
  return (
    <div className='flowers-container'>
      <Search onChange={() => {}} />
      <FlowersList />
    </div>
  );
};

export default Flowers;
