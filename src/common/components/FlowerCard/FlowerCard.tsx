import './FlowerCard.css';
import { Flower } from '../../../Flowers/Flowers.d';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  flower: Flower;
  onClick?: () => void;
}

const FlowerCard: React.FC<Props> = ({
  flower: { name, latin_name, profile_picture, favorite },
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className='flower-card'>
      <img src={profile_picture} alt={name} className='flower-card-img' />
      <div className='flower-card-name'>{name}</div>
      <div className='flower-card-subname'>{latin_name}</div>
      <button onClick={handleClick} className={`flower-card-favorite ${favorite ? 'red' : ''}`}>
        {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
    </div>
  );
};

export default FlowerCard;
