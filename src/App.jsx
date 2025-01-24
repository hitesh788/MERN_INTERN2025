import React, { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Signup from './Components/SignUp';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import UseEffectApi from './Components/UseEffectAPI';
import UseRef from './Components/UseRef';
import UseMemo from './Components/UseMemo';
import UseCallback from './Components/UseCallback';
import List from './Components/List';
import LogIn from './Components/LogIn';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ReactLifeCycle from './Components/ReactLifeCycle';
import LogOut from './Components/LogOut';
import Student from './Components/UseContext';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [username, setUsername] = useState(''); // Store the username

  // Handle successful sign-in
  const handleLogIn = (user, pass) => {
    if (user && pass) {
      setIsAuthenticated(true); // Allow any non-empty username/password
      setUsername(user); // Store username (optional)
    } else {
      alert('Please enter both username and password.');
    }
  };

  // Protected Route Component
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" replace />;
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LogIn onLogIn={handleLogIn} />} />
          <Route
            path="/home" element={<ProtectedRoute element={<Home username={username} />} />}
          />
          <Route
            path="/about"
            element={<ProtectedRoute element={<About />} />}
          />
          <Route
            path="/gallery" element={<ProtectedRoute element={<Gallery image="SECE Logo" page="Gallery" />} />}
          />
          <Route path="/contact" element={<ProtectedRoute element={<Contact />} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/use-state" element={<ProtectedRoute element={<UseState />} />}
          />
          <Route path="/use-effect" element={<ProtectedRoute element={<UseEffect />} />}
          />
          <Route path="/use-api" element={<ProtectedRoute element={<UseEffectApi />} />}
          />
          <Route path="/use-ref" element={<ProtectedRoute element={<UseRef />} />}
          />
          <Route path="/use-memo"  element={<ProtectedRoute element={<UseMemo />} />}
          />
          <Route path="/use-callback" element={<ProtectedRoute element={<UseCallback />} />}
          />
          <Route  path="/list"element={<ProtectedRoute element={<List />} />}
          />
          <Route path="/reactlifecycle" element={<ProtectedRoute element={<ReactLifeCycle />} />}
          />
        <Route path="/logout" element={<ProtectedRoute element={<LogOut />} />}
          />
          <Route path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
