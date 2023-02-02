import Header from "./Header";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Addmenu from "./screens/Addmenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from "react-redux";



function App() {
  const isLoggedin = useSelector((state) => state.user.isLoggedin);
  return (
    <div>
    <Router>
      <Header/>
        <Routes>
          {isLoggedin && (<Route exact path='/home' element={<Home/>}></Route>)}
          <Route exact path='auth/login' element={<Login/>}></Route>
          <Route exact path='auth/signup' element={<Signup/>}></Route>
          {isLoggedin && (<Route exact path='Addmenu' element={<Addmenu/>}></Route>)}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
