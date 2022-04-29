import React, { useState } from 'react'
import styles from "../styles/Wrapper.module.css"
import Counter from './Counter'


function Wrapper() {

    const [count, setCount] = useState(0);
    const [intervalStart, setIntervalStart] = useState();
    const [showCount, setShowCount] = useState(true);
    const [change, setChange] = useState("");


    const startCounter = () => {
        setChange("")
        setCount(change)
        reset();
        setShowCount(true)
        setIntervalStart(setInterval(() => {
            setCount(prevState =>
                prevState + 1
            );
        }, 1000))
    }
    const stopCounter = () => {
        clearInterval(intervalStart);
    }

    const reset = () => {
        clearInterval(intervalStart);
        setCount(Number(change));
        setShowCount(true);
        // setChange(count);
    }

    const deleteCounter = () => {
        setCount(count);
        setChange("");
        setShowCount(false);
        clearInterval(intervalStart);

    }



    return (
        <>
            <h2 className='title'>COUNTER APP</h2><br />
            <input onChange={(e) => { setChange(e.target.value) }} value= {change} type="number" name="number" placeholder="Enter..." />
            <h5>Enter the number from where you want to start the counter</h5>
            <div className={styles.container}>

                {showCount && <h1><Counter value={count}  /></h1>}
                <button className={`${styles.custombtn} ${styles.btn0}`} onClick={startCounter}  ><span><b>Start</b></span></button>
                <button className={`${styles.custombtn} ${styles.btn}`} onClick={stopCounter} ><span><b>Stop</b></span></button>
                <button className={`${styles.custombtn} ${styles.btn2}`} onClick={deleteCounter} ><span><b>Delete</b></span></button>
            </div>
        </>
    )
}

export default Wrapper
