import './App.css';
import Jadwal from './components/Jadwal';
import Navigator from './components/Navigation';
import Profile from './components/Profile';
import Aktivitas from './components/Aktivitas';
import Portofolio from './components/Portofolio';

function App() {
  return (
    <div className='App'>
      <Navigator />
      <Profile />
      <Jadwal />
      <Aktivitas />
      <Portofolio />
    </div>
  );
}

export default App;
