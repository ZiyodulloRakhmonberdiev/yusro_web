// useFetch.js
import { useState, useEffect, useRef } from 'react';

const useFetch = (fetchData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetch;


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useFetch = (fetchUrl) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(fetchUrl);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [fetchUrl]);

//   return { data, loading, error };
// };

// export default useFetch;
