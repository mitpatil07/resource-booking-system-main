import { useState } from 'react';
import Login from './Login';
import Resources from './Resources';
import Booking from './Booking';
import MyBookings from './MyBookings';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const appContainer = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    paddingBottom: '40px',
  };

  const headerStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoutButton = {
    marginTop: '10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const sectionSpacing = {
    marginTop: '30px',
  };

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div style={appContainer}>
      <div style={headerStyle}>
        <h1>Resource Booking System</h1>
        <button style={logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div style={sectionSpacing}>
        <Resources token={token} />
      </div>

      <div style={sectionSpacing}>
        <Booking token={token} />
      </div>

      <div style={sectionSpacing}>
        <MyBookings token={token} />
      </div>
    </div>
  );
}

export default App;
