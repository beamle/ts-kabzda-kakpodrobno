import React from 'react';
import s from "./Onoff.module.css";

type OnOffType = {
    lightStatus: boolean
    setLightStatus: (lighstStatus: boolean) => void
}

const OnOff = ({lightStatus, setLightStatus}: OnOffType) => {
    const changeStatusOn = () => {
        setLightStatus(true)
    }
    const changeStatusOff = () => {
        setLightStatus(false);
    }

    return (
        <div className={s.switcher}>
            <button onClick={changeStatusOn} className={lightStatus ? s.switcherActive : ''}>On</button>
            <button onClick={changeStatusOff} className={!lightStatus ? s.switcherInactive : ''}>Off
            </button>
            <span className={lightStatus ? s.lampActive : s.lampInactive}>...</span>
        </div>
    );
};

export default OnOff;