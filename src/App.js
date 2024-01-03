import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
