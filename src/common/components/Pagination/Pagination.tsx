import Button from '../Button/Button';
import './Pagination.css';

type Props = {};

const Pagination: React.FC<Props> = () => {
  return (
    <div className='pagination'>
      <Button
        disabled={false}
        onClick={() => {
          console.log('radi');
        }}
      >
        Previous page
      </Button>
      <Button
        disabled={false}
        onClick={() => {
          console.log('radi');
        }}
      >
        Next page
      </Button>
    </div>
  );
};

export default Pagination;
