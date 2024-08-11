

import React, { useState, useRef, useEffect } from "react";
import '../Counter/Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isAuto, setIsAuto] = useState(false);
    const intervalRef = useRef(null);

    const handleInc = () => {
        if (count < 20) {
            setCount(count + 1);
        } else {
            alert("Maximum limit is 20");
        }
    };

    const handleDec = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAutoStart = () => {
        if (!isAuto) {
            setIsAuto(true);
            intervalRef.current = setInterval(() => {
                if (count < 20) {
                    setCount(prevCount => prevCount + 1);
                } else {
                    clearInterval(intervalRef.current);
                    setIsAuto(false);
                }
            }, 1000);
        }
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
        setIsAuto(false);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className="counter-container">
            <h1 className="counter-display">{count}</h1>
            <div className="Flex">
                <button className="counter-button" onClick={handleInc}>+</button>
                <button className="counter-button" onClick={handleDec}>-</button>
                <button className="counter-button" onClick={handleAutoStart} disabled={isAuto}>AutoStart</button>
                <button className="counter-button" onClick={handleStop} disabled={!isAuto}>Stop</button>
            </div>
        </div>
    );
}

export default Counter;
