import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Left from './Left';
import Navbar from './Navbar';
import './Navbar.css';
import Right from './Right';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Left />
          <Routes>
            <Route path="/:genreId" element={<Right/>}/>
            <Route path="/" element={<Right/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </div> 
  );
}

export default App;
