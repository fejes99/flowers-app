import './Search.css';

interface Props {
  onChange: (query: string) => void;
}

const Search: React.FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className='search-contailer'>
      <input
        name='name'
        className='search'
        type='text'
        placeholder='Search...'
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
