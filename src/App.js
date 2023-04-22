import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import CreateAccount from './Pages/CreateAccount';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';

function App() {
  return (
    <>
    <div className='serverNavBar'>
      <h1>hi there</h1>
    </div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          {/* <Route path='/login' element={<Login />}/> */}
          <Route path='/createaccount' element={<CreateAccount />}/>
          <Route path='/profile' element={<Profile />}/>

          {/* should be the last route! */}
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <div>Footer section!</div>
      </Router>
    </>
  );
}

export default App;
