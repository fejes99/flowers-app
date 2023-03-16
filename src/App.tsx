import Navbar from './components/Navbar/Navbar';
import Flowers from './Flowers/Flowers';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Favorite from './Favorite/Favorite';
import Profile from './Profile/Profile';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='flowers' element={<Flowers />} />
        <Route path='favorite' element={<Favorite />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<Navigate to='/flowers' replace />} />
      </Routes>
    </div>
  );
};

export default App;
