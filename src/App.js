
import './App.css';
import Header from './containers/Header';
import {Routes, Route} from "react-router-dom"
import Home from './containers/Home';
import Login from './containers/Login';
import Operations from './containers/Operations';
import Alarms from './containers/Alarms';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/operations' element={<Operations />}/>
        <Route path='/alarms' element={<Alarms />}/>
      </Routes>
    </div>
  );
}

export default App;
