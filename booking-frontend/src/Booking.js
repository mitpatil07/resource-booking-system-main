import { useState } from 'react';
import axios from 'axios';

function Booking({ token }) {
  const [resourceId, setResourceId] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const data = {
        resource: parseInt(resourceId, 10),
        start_time: new Date(start).toISOString(),
        end_time: new Date(end).toISOString(),
        quantity: parseInt(quantity, 10),
      };

      console.log('Sending data:', data);

      await axios.post('http://127.0.0.1:8000/api/book/', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Booked successfully!');
    } catch (err) {
      console.error('Booking Error:', err.response?.data || err.message);
      alert('Booking failed!');
    }
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '15px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  return (
    <form onSubmit={handleBooking} style={formStyle}>
      <h2 style={headingStyle}>Book Resource</h2>

      <input
        type="number"
        placeholder="Resource ID"
        value={resourceId}
        onChange={e => setResourceId(e.target.value)}
        required
        style={inputStyle}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={e => setQuantity(parseInt(e.target.value, 10))}
        required
        style={inputStyle}
      />

      <input
        type="datetime-local"
        value={start}
        onChange={e => setStart(e.target.value)}
        required
        style={inputStyle}
      />

      <input
        type="datetime-local"
        value={end}
        onChange={e => setEnd(e.target.value)}
        required
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>Book</button>
    </form>
  );
}

export default Booking;
