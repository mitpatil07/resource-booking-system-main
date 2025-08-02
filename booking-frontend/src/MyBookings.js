import { useEffect, useState } from 'react';
import axios from 'axios';

function MyBookings({ token }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/my-bookings/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    backgroundColor: '#fff',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '15px',
    color: '#555',
  };

  const highlight = {
    fontWeight: 'bold',
    color: '#007BFF',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>My Bookings</h2>
      <ul style={listStyle}>
        {bookings.length === 0 ? (
          <li style={{ ...listItemStyle, textAlign: 'center' }}>No bookings found.</li>
        ) : (
          bookings.map((b) => (
            <li key={b.id} style={listItemStyle}>
              <div>
                <span style={highlight}>Resource ID:</span> {b.resource}
              </div>
              <div>
                <span style={highlight}>From:</span>{' '}
                {new Date(b.start_time).toLocaleString()}
              </div>
              <div>
                <span style={highlight}>To:</span>{' '}
                {new Date(b.end_time).toLocaleString()}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default MyBookings;
