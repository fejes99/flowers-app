import './Search.css';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({ onChange }) => {
  return (
    <div className='search-contailer'>
      <input
        name='name'
        className='search'
        type='text'
        placeholder='Search...'
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
