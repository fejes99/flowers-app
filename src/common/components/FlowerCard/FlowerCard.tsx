import './FlowerCard.css';
import { Flower } from '../../../Flowers/Flowers.d';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  flower: Flower;
  enabled?: boolean;
  onClick?: () => void;
}

const FlowerCard: React.FC<Props> = ({
  flower: { name, latin_name, profile_picture, favorite },
  enabled,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className='flower-card'>
      <img src={profile_picture} alt={name} className='flower-card-img' />
      <div className='flower-card-data'>
        <div className='flower-card-name'>{name}</div>
        <div className='flower-card-subname'>{latin_name}</div>
      </div>
      {enabled ? (
        <button onClick={handleClick} className={`flower-card-favorite  ${favorite ? 'red' : ''}`}>
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </button>
      ) : null}
    </div>
  );
};

export default FlowerCard;
