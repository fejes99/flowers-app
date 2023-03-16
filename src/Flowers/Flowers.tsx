import './Flowers.css';
import Search from '../components/Search/Search';
import FlowerList from './FlowerList/FlowerList';

const Flowers: React.FC = () => {
  return (
    <div className='flowers-container'>
      <Search onChange={() => {}} />
      <FlowerList />
    </div>
  );
};

export default Flowers;
