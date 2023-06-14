import React, {useState} from 'react';
import s from './Onoff.module.css';


const UncontrolledONOFF = () => {

    const [light, setLight] = useState(false);

    function lightSwitchHandle(){
        setLight(!light)
    }

    return (
        <div className={s.switcher}>
            <button onClick={lightSwitchHandle} className={light ? s.switcherActive : ''}>On</button>
            <button onClick={lightSwitchHandle} className={!light ? s.switcherInactive : ''}>Off</button>
            <span className={light ? s.lampActive : s.lampInactive}>...</span>
        </div>
    );
};

export default UncontrolledONOFF;