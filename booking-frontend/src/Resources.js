import { useEffect, useState } from 'react';
import axios from 'axios';

function Resources({ token }) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/resources/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setResources(res.data))
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

  const nameStyle = {
    fontWeight: 'bold',
    color: '#007BFF',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Available Resources</h2>
      <ul style={listStyle}>
        {resources.length === 0 ? (
          <li style={{ ...listItemStyle, textAlign: 'center' }}>No resources available.</li>
        ) : (
          resources.map((r) => (
            <li key={r.id} style={listItemStyle}>
              <span style={nameStyle}>{r.name}</span>: {r.description}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Resources;
