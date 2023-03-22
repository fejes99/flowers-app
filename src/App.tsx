import { Navigate, Route, Routes } from 'react-router';

import './App.css';
import Flowers from './Flowers/Flowers';
import Favorite from './Favorite/Favorite';
import Navbar from './common/components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='flowers' element={<Flowers />} />
        <Route path='favorite' element={<Favorite />} />
        <Route path='*' element={<Navigate to='/flowers' replace />} />
      </Routes>
    </div>
  );
};

export default App;
