import './Search.css';

interface Props {
  onChange: (query: string) => void;
}

const Search: React.FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='search-contailer'>
      <input name='name' className='search' placeholder='Search...' onChange={handleChange} />
    </div>
  );
};

export default Search;
