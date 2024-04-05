import './App.css';
import Auth from './auth/Auth';
import Signin from './pages/Welcome/Main/Signin';
import Signup from './pages/Welcome/Main/Signup';
import { useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';

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
      <div>
        <Dashboard />
      </div>
      
    </div>
  );
}

export default App;
