import './App.css';
import Auth from './auth/Auth';
import UserList from './components/user/UserList';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { useState } from 'react';
import LeaderDashboard from './pages/LeaderDashboard';
import MemberDashboard from './pages/MemberDashboard';

function App() {


  const [authenticated, isAuthenticated] = useState(true);
  const [role, setRole] = useState('admin');

  return (
    <div className="App">
      <h1>React App</h1>
      <Auth />
      <div>

      {(authenticated) ? <Signup />:<Signin />}

      </div>
      
    </div>
  );
}

export default App;
