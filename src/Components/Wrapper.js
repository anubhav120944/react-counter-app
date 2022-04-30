import React, { Component } from 'react'
import styles from "../Styles/Wrapper.module.css"
import Counter from './Counter';


export default class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            showCount: true,
            startTimer: false,
            startFrom: ""
        }
    }


    startCounter = () => {

        this.setState({ count: Number(this.state.startFrom), startFrom: "", showCount: true, startTimer: true });

    }

    stopCounter = () => {
        this.setState({ startTimer: false })
    }

    deleteCounter = () => {
        this.setState({
            count: 0,
            showCount: false,
            startTimer: false
        });
        clearInterval(this.interval);

    }


    componentDidMount() {
        this.setState({ startTimer: true })
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.state.startTimer) {
            this.interval = setInterval(() => {
                this.setState(prevState => {
                    return {
                        count: prevState.count + 1,
                    };
                });
            }, 1000);
        }
    }

    handleChange = (e) => {
        this.setState(prevState => {
            return {
                ...prevState,
                startFrom: e.target.value
            }
        })
    }

    render() {
        return (
            <>
                <h2 className='title'>COUNTER APP</h2><br />
                <input onChange={this.handleChange} value={this.state.startFrom} type="number" name="number" placeholder="Enter..." />
                <h5>Enter the number from where you want to start the counter</h5>
                <div className={styles.container}>

                    {this.state.showCount && <h1><Counter value={this.state.count} /></h1>}
                    <button className={`${styles.custombtn} ${styles.btn0}`} onClick={this.startCounter} ><span><b>Start</b></span></button>
                    <button className={`${styles.custombtn} ${styles.btn}`} onClick={this.stopCounter} ><span><b>Stop</b></span></button>
                    <button className={`${styles.custombtn} ${styles.btn2}`} onClick={this.deleteCounter} ><span><b>Delete</b></span></button>
                </div>
            </>
        )
    }
}
