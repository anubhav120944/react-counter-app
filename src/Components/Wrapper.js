import React, { Component } from 'react'
import styles from "../Styles/Wrapper.module.css"
import Counter from './Counter';


export default class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            showCount: true
        }
    }

    reset = () => {
        clearInterval(this.interval);
        this.setState({ count: this.props.startFrom, showCount: true });
    }

    startCounter = () => {
        this.reset();
        this.interval = setInterval(() => {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1,
                };
            });
        }, 1000);
    }

    stopCounter = () => {
        clearInterval(this.interval);
    }

    deleteCounter = () => {
        this.setState({
            count: 0,
            showCount: false
        });
        clearInterval(this.interval);

    }

    componentDidMount() {
        const { startFrom } = this.props;
        this.setState({
            count: startFrom
        })
    }
    componentWillUnmount() {
        this.stopCounter();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.count > 10) {
            this.deleteCounter()
            alert("Using COMPONENT_DID_UPDATE  where Counter cannot run more than 10");
        }
    }


    render() {
        return (
            <div className={styles.container}>

                {this.state.showCount && <h1><Counter value={this.state.count} /></h1>}
                <button className={`${styles.custombtn} ${styles.btn0}`} onClick={this.startCounter} ><span><b>Start</b></span></button>
                <button className={`${styles.custombtn} ${styles.btn}`} onClick={this.stopCounter} ><span><b>Stop</b></span></button>
                <button className={`${styles.custombtn} ${styles.btn2}`} onClick={this.deleteCounter} ><span><b>Delete</b></span></button>
            </div>
        )
    }
}
