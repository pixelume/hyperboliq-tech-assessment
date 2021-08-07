import {useState, useEffect} from 'react'

const useFetch = (query) => {
  const [data, setData] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (query) {
      setLoading(true)
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://movie-database-imdb-alternative.p.rapidapi.com/?${query}`,
            {
              method: 'GET',
              headers: {
                'x-rapidapi-key': process.env.REACT_APP_IMDBAPI,
                'x-rapidapi-host':
                  'movie-database-imdb-alternative.p.rapidapi.com',
              },
            }
          );
          if (response.ok) {
            const json = await response.json();
            setData(json);
          } else {
            setFetchError(
              `${await response.text()} (Status code ${response.status})`
            );
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [query])
  return [data, fetchError, loading]
}

export default useFetch