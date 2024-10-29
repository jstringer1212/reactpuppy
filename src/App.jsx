import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import { Box, Button } from '@mui/material';

function App() {
  return (
    <>
    <h1>WELCOME TO THE PUPPY BOWL</h1>
    <br></br>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
        <Link to="/allplayers">
          <Button variant="contained" sx={{ margin: 1 }}>
            Go to All Players
          </Button>
        </Link>
        <Link to="/players/new">
          <Button variant="contained" sx={{ margin: 1 }}>
            Add Player
          </Button>
        </Link>
      </Box>
      <Routes>
        <Route path='/allplayers' element={<AllPlayers />} />
        <Route path="/players/new" element={<NewPlayerForm />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App;
