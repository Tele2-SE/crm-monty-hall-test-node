import {useEffect, useState} from 'react'
import axios from "axios";

const useServerHealth = () => {
  const [serverHealth, setServerHealth] = useState('UNKNOWN')

  useEffect(() => {

    const interval = setInterval(() => {
      axios.get('/health')
        .then(res => {
          if (res.status === 200) {
            setServerHealth('UP');
          } else {
            setServerHealth('DOWN');
          }
        })
        .catch(res => {
          console.log(res);
          setServerHealth('DOWN');
        });
    }, 3000);
    return () => clearInterval(interval);
  }, [])

  return serverHealth
}

export default useServerHealth
