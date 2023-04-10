import { FlowerPagination } from '../../../Flowers/Flowers.d';
import Button from '../Button/Button';
import './Pagination.css';

interface Props {
  pagination: FlowerPagination | null;
  prevPage: () => void;
  nextPage: () => void;
}

const Pagination: React.FC<Props> = ({ pagination, prevPage, nextPage }) => {
  if (!pagination) return null;

  return (
    <div className='pagination'>
      <Button type='success' disabled={!pagination?.prev_page} onClick={prevPage}>
        Prev
      </Button>
      <Button type='success' disabled={!pagination?.next_page} onClick={nextPage}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
