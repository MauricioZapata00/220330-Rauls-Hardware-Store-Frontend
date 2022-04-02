
import './App.css';
import Header from './containers/Header';
import {Routes, Route} from "react-router-dom"
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' />
        <Route path='/operations' />
        <Route path='/alarms' />
      </Routes>
    </div>
  );
}

export default App;
