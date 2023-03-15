import Navbar from './components/Navbar/Navbar';
import Flowers from './Flowers/Flowers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='main'>
        <Flowers />
      </div>
    </div>
  );
};

export default App;
