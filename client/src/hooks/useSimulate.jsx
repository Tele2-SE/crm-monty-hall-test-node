import axios from "axios";
import {useEffect, useState, useMemo} from 'react'

const useSimulate = () => {
  const [status, setStatus] = useState('UNDEFINED');
  const [props, setProps] = useState({attempts: null, switchDoor: null});

  useEffect(() => {
    if(props.attempts !== null && props.switchDoor !== null) {
      axios.get(`/simulations/${props.attempts}/${props.switchDoor}`)
        .then(res => {
          if (res.status === 200) {
            setStatus(res.data)
          } else {
            setStatus('ERROR')
          }
        })
        .catch(res => {
          console.log('ERROR', res);
          setStatus('ERROR')
        });
    }
  }, [props])

  const handlers = useMemo(
    () => ({
      simulate: (attempts, switchDoor) => {
        setProps({
          attempts,
          switchDoor
        });
      },
    }),
    [],
  );

  return [{ status }, handlers];
}

export default useSimulate;
