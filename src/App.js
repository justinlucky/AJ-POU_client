import './App.css';
import SignUp from './Components/SignUp';
import Home from './Pages/Home/Home';
import './styles/ButtonStyles.css';

function App() {
  return (
    <div className="App">
      <button className='button primaryCurveButton'>Click Here</button>
      <button className='button secondaryCurveButton'>Click Here</button>
      <button className='button primaryNoCurveButton'>Click Here</button>
      <button className='button secondaryNoCurveButton'>Click Here</button>
      <button className='button primarySmallCurveButton'>Click Here</button>
      <button className='button secondarySmallCurveButton'>Click Here</button>
      <button className='button primaryNoBackgroundButton'>Click Here</button>
      <button className='button secondaryNoBackgroundButton'>Click Here</button>
      <button className='button terrestrialButton'>Click Here</button>
      <Home></Home>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
