import React from "react";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    addOne = () => {
        this.setState(({ count: this.state.count + 1 }), () => console.log('qushildi'));
    }

    render() {
        return (
            <div>
                <h1>Cunter: {this.state.count} </h1>
                <button onClick={this.addOne} > click++ </button>
                <button> click-- </button>
            </div>
        )
    }
}

export default App; 