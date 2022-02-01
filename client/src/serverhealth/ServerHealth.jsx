import React from "react";
import './ServerHealth.css';
import useServerHealth from './useServerHealth';

const ServerHealth = () => {
 const serverHealth  = useServerHealth();

    return (
      <div className="serverHealth">
        <p>Backend is: <a className={serverHealth}>{serverHealth}</a></p>
      </div>
    );


}

export default ServerHealth;
