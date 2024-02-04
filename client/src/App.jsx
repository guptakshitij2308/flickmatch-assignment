import TeamStats from "./TeamStats.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);

  // console.log(id);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getMatchStats/${id}`
      );
      // console.log(response);
      setData(response?.data?.match[0]);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(
    function () {
      fetchData(id);
    },
    [id]
  );

  return <TeamStats setId={setId} data={data} />;
}

export default App;
