import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import { BsFillPlayBtnFill, BsFillPauseBtnFill, BsStopFill, BsPauseFill } from "react-icons/bs";
import "./clock.css";

const Timer = () => {
    const [miliSecond, setMiliSecond] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [showScreen, setShowScreen] = useState({
        show: false,
        message: "The Timer ENDED"
    });
    const changeSecond = (e) => {
        setSecond(e.target.value);
    };
    const changeMinitue = (e) => {
        setMinute(e.target.value);
    };
    const ChangeHour = (e) => {
        setHour(e.target.value);
    }

    const startTimer = () => {
        if (hour !== 0 || minute !== 0 || second !== 0 || miliSecond !== 0) {
            setIsRunning(true);
        } else {
            window.alert("Add Time.");
        }
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setShowScreen({...showScreen, show: false});
        setIsRunning(false);
        setMiliSecond(0);
        setSecond(0);
        setMinute(0);
        setHour(0);
    };

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                if (miliSecond > 0) {
                    setMiliSecond((miliSecond) => miliSecond - 1);
                }
                else if (second > 0) {
                    setSecond((second) => second - 1);
                    setMiliSecond(99);
                }
                else if (minute > 0) {
                    setMinute((minute) => minute - 1);
                    setSecond(59);
                    setMiliSecond(99);
                }
                else if (hour > 0) {
                    setHour((hour) => hour - 1);
                    setMinute(59);
                    setSecond(59);
                    setMiliSecond(99);
                }
                else {
                    setIsRunning(false);
                }
            }, 10);
        }

        if (hour === 0 && minute === 0 && second === 0 && miliSecond === 1) {
            setShowScreen({...showScreen, show: true});
            reset();
        }
        return () => clearInterval(interval);
    }, [miliSecond, second, minute, hour, isRunning, showScreen]);


    return (
        <div>
            <h1 className="title"> Timer </h1>
            {showScreen.show && <h1 className="title">{showScreen.message}</h1>}
            <Clock
                miliSecond={miliSecond}
                second={second}
                minute={minute}
                hour={hour}
                isRunning={isRunning}
                changeSecond={changeSecond}
                changeMinitue={changeMinitue}
                ChangeHour={ChangeHour}
            />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <div style={{ padding: "2%" }}>
                    {isRunning ? (
                        <button className="btn btn-warning" onClick={pauseTimer}>
                            <BsPauseFill className="icons"/>
                        </button>
                    ) : (
                        <button className="btn btn-success" onClick={startTimer}>
                            <BsFillPlayBtnFill className="icons"/>
                        </button>
                    )}{""}
                </div>
                <div style={{ padding: "2%" }}>
                    <button className="btn btn-danger" onClick={reset} >
                        <BsStopFill className="icons"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timer;