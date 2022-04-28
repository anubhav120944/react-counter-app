import React, { Component } from 'react'
import styles from "../ClassComponents/Wrapper.module.css"
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


    render() {
        return (
            <div className={styles.container}>

                {this.state.showCount && <h1><Counter value={this.state.count} /></h1>}
                <button className={`${styles.custombtn} ${styles.btn}`} onClick={this.startCounter} ><span>Start</span></button>
                <button className={`${styles.custombtn} ${styles.btn}`} onClick={this.stopCounter} ><span>Stop</span></button>
                <button className={`${styles.custombtn} ${styles.btn}`} onClick={this.deleteCounter} ><span>Delete</span></button>
            </div>
        )
    }
}
