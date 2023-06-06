import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Learn React <br></br>   
      {process.env.REACT_APP_NAME}
    </div>
  );
}

export default App;
