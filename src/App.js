import axios from "axios";
import Users from "./components/users";
import Pagination from "./components/Pagination";
import React, { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let fetchUser = async () => {
      setLoading(true);

      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );

      setLoading(false);

      setUser(response.data.data);

      setTotalPages(response.data.total_pages);
    };
    fetchUser();
  }, []);
  const handleClick = async (num) => {
    const response = await axios.get(`https://reqres.in/api/users?page=${num}`);
    return setUser(response.data.data);
    // console.log(response.data);
  };

  return (
    <div>
      <h1>Users-Data</h1>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <>
          <Users user={user} page={page} />
          <Pagination totalPages={totalPages} handleClick={handleClick} />
        </>
      )}
    </div>
  );
}

export default App;
