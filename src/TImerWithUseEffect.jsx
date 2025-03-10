import "./timer.css"
// import React, { useState, useEffect } from 'react';
// const TImerWithUseEffect = () => {
//     const [time, setTime] = useState(10); // Initial time set to 10 seconds
//     useEffect(() => {
//         // Set up interval to decrease time every second
//         const interval = setInterval(() => {
//             setTime((prevTime) => {
//                 if (prevTime === 1) clearInterval(interval); // Stop timer at 0
//                 return prevTime - 1;
//             });
//         }, 1000);
//         // Cleanup interval when component unmounts or time reaches 0
//         return () => clearInterval(interval);
//     }, []); // Empty dependency array ensures this effectruns only once when the component mounts
//     return (
//         <div>
//             <h2>Countdown: {time} seconds</h2>
//             <button onClick={() => { clearInterval(5000) }}>got to 0</button>
//         </div >
//     );
// };
// export default TImerWithUseEffect;


import React, { useState, useEffect, useRef } from 'react';

const TimerWithUseEffect = () => {
    const [time, setTime] = useState(10); // Initial time set to 10 seconds
    const [running, setRunning] = useState(false); // Track if the timer is running
    const intervalRef = useRef(null); // Store interval ID in a ref

    useEffect(() => {
        if (running) {
            // Set up interval to decrease time every second
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime === 1) {
                        clearInterval(intervalRef.current); // Stop timer at 0
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            // Cleanup interval when timer is not running
            clearInterval(intervalRef.current);
        }

        // Cleanup interval when component unmounts or timer is not running
        return () => clearInterval(intervalRef.current);
    }, [running]); // Dependency array listens to 'running' state changes

    const startTimer = () => {
        if (time > 0) {
            setRunning(true); // Start the timer
        }
    };

    const stopTimer = () => {
        setRunning(false); // Stop the timer
    };

    const resetTimer = () => {
        setRunning(false); // Stop the timer
        setTime(10); // Reset time to initial value (10 seconds)
    };

    return (
        <div id="timer">
            <h2>Countdown: {time} seconds</h2>
            <button onClick={startTimer} disabled={running || time === 0}>
                Start Timer
            </button>
            <button onClick={stopTimer} disabled={!running}>
                Stop Timer
            </button>
            <button onClick={resetTimer}>
                Reset Timer
            </button>
        </div>
    );
};

export default TimerWithUseEffect;
