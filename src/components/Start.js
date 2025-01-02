import React from 'react';

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Benz",
            model: "SCLS",
            color: "Red",
            year: 2003,
        };
    }

    changeColor = () => {
        this.setState({ color: "Blue" });
    };

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button type="button" onClick={this.changeColor}>
                    Change Color
                </button>
            </div>
        );
    }
}

export default Start;
