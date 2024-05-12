import { useEffect } from 'react';

function useFetch(url, setFn) {
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        return res.json();
      })
      .then((data) => {
        const [key] = Object.keys(data);
        setFn(data[key]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, setFn]);
}

export default useFetch;
