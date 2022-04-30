import React, { useEffect, useState } from 'react'
import styles from "../styles/Wrapper.module.css"
import Counter from './Counter'


function Wrapper() {

    const [count, setCount] = useState(0);
    const [intervalStart, setIntervalStart] = useState();
    const [showCount, setShowCount] = useState(true);
    const [change, setChange] = useState("");
    const [startTimer, setStartTimer] = useState(false);


    const startCounter = () => {
        setCount(Number(change));
        setChange("");
        setShowCount(true);
        setStartTimer(true);
    }
    const stopCounter = () => {
        setStartTimer(false)
    }

    const deleteCounter = () => {
        setCount(count);
        setChange("");
        setShowCount(false);
        setStartTimer(false)
        clearInterval(intervalStart);

    }

    useEffect(() => {
        if(intervalStart) {
            clearInterval(intervalStart)
        }
        if (startTimer) {
            setIntervalStart(setInterval(() => {
                setCount(prevState =>
                    prevState + 1
                );
            }, 1000))
        }
        return () => clearInterval(intervalStart)
    }, [startTimer])

    return (
        <>
            <h2 className='title'>COUNTER APP</h2><br />
            <input onChange={(e) => { setChange(e.target.value) }} value={change} type="number" name="number" placeholder="Enter..." />
            <h5>Enter the number from where you want to start the counter</h5>
            <div className={styles.container}>

                {showCount && <h1><Counter value={count} /></h1>}
                <button className={`${styles.custombtn} ${styles.btn0}`} onClick={startCounter}  ><span><b>Start</b></span></button>
                <button className={`${styles.custombtn} ${styles.btn}`} onClick={stopCounter} ><span><b>Stop</b></span></button>
                <button className={`${styles.custombtn} ${styles.btn2}`} onClick={deleteCounter} ><span><b>Delete</b></span></button>
            </div>
        </>
    )
}

export default Wrapper
