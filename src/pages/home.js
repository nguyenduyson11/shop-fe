import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_API}/users`
        );
        setUsers(response.data.data);
      } catch (error) {
        console.log('error----------', error);
      }
      // ...
    }
    fetchData();
  }, []);
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Home</h2>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </main>
  );
}
