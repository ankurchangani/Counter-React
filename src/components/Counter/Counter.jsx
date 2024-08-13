

import React, { useState, useRef, useEffect } from "react";
import '../Counter/Counter.css'


const Counter = () => {
    const [count, setCount] = useState(0);

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

    return (
        <div >
            <h1 className="Counter">Counter</h1>
            <div className="center">

                <div className="counter-container">
                    <h2 className="counter-display">{count}</h2>
                    <div className="Flex">
                        <button className="counter-button" onClick={handleInc}>+</button>
                        <button className="counter-button" onClick={handleDec}>-</button>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Counter;
