
import './App.css';
import HomeOutlinedIcon from '@mui/icons-material/AbcOutlined';
import Navbar from './Components/Navbar/Navbar';
import Routing from './Components/Routing/Routing';
function App() {
  return (
    <div className='app'>
      <div className='background'>

      </div>
      <div>
      <Navbar/>
      </div>
      <div style={{flex:"1"}}>
        <Routing/>

      </div>

    </div>
  );
}

export default App;
