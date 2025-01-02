import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            isRunning: true, 
        };
    }

    tick = () => {
        if (this.state.isRunning) {
            this.setState({
                seconds: this.state.seconds + 1,
            });
        }
    };

    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        console.log('Timer updated');
    }

    componentWillUnmount() {
        clearInterval(this.id); 
    }

    stopTimer = () => {
        this.setState({ isRunning: false });
    };

    render() {
        return (
            <div>
                <div>Seconds: {this.state.seconds}</div>
                <button onClick={this.stopTimer}>STOP</button>
            </div>
        );
    }
}

const Comp = () => {
    return (
        <div>
            <h2>Comp Component</h2>
            <Timer />
        </div>
    );
};

export default Comp;
