import './FlowerCard.css';
import Flower from '../../../Flowers/Flowers.d';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  flower: Flower;
}

const FlowerCard: React.FC<Props> = ({
  flower: { name, latin_name, profile_picture, favorite },
}) => {
  return (
    <div className='flower-card'>
      <img src={profile_picture} alt={name} className='flower-card-img' />
      <div className='flower-card-name'>{name}</div>
      <div className='flower-card-subname'>{latin_name}</div>
      <button className={`flower-card-favorite ${favorite ? 'red' : ''}`}>
        {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
    </div>
  );
};

export default FlowerCard;
