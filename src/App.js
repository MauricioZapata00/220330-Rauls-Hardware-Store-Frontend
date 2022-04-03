
import './App.css';
import Header from './containers/Header';
import {Routes, Route} from "react-router-dom"
import Home from './containers/Home';
import Login from './containers/Login';
import Operations from './containers/Operations';
import Alarms from './containers/Alarms';
import { useDispatch } from 'react-redux';
import { setEnteringUser } from './redux/actions/UserActions';
import Bills from './containers/Bills';


function App() {
  const dispatch = useDispatch();
  dispatch(setEnteringUser([]))
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/operations' element={<Operations />}/>
        <Route path='/alarms' element={<Alarms />}/>
        <Route path='/bills' element={<Bills />}/>
      </Routes>
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=8NMJxyDwP6A
//Other bootstrap -> https://v4.mui.com/
//Authentication with GitHub -> https://www.youtube.com/watch?v=UPVvJpQrgmU