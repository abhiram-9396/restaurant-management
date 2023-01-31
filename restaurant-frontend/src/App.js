import Header from "./Header";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='auth/login' element={<Login/>}></Route>
          <Route exact path='auth/signup' element={<Signup/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
