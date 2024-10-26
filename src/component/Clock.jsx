import React from "react";
import { BsStopwatch } from "react-icons/bs";
import "./clock.css";

const Clock = ({
    miliSecond,
    second,
    minute,
    hour,
    isRunning,
    changeSecond,
    changeMinitue,
    ChangeHour
}) => {
    return (
        <div className="clock">
            <BsStopwatch className="stop-watch" />
            <div className="d-flex flex-column">
                <label>HH</label>
                <input value={hour} onChange={ChangeHour}/>
            </div>{""}
            <div className="d-flex flex-column">
                <label>MIN</label>
                <input value={minute} onChange={changeMinitue}/>
            </div>{""}
            <div className="d-flex flex-column">
                <label>SEC</label>
                <input value={second} onChange={changeSecond}/>
            </div>{""}
            <div className="d-flex flex-column">
                <label>MSEC</label>
                <input value={miliSecond} readOnly/>
            </div>
        </div>
    );
};

export default Clock;