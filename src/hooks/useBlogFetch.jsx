import { useState, useEffect, useRef } from 'react';

const useBlogFetch = (fetchFunction, deps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) {
      setLoading(true);
    }
    
    const loadData = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
        setLoading(false);
        hasFetched.current = true;
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadData();
  }, deps);

  return { data, loading, error };
};

export default useBlogFetch;
