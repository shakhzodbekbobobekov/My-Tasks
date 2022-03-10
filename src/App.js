import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MaxsulotTuri: 'Temir',
            Sifat: "Yangi",
            Narxi: '50$'
        };
    }

    changeNames = () => {
        this.setState({
            MaxsulotTuri: 'Taxta',
            Sifat: "Eskiroq",
            Narxi: '20$',
        });
    }

    render() {
        return (
            <div>
                <p>MaxsulotTuri: {this.state.MaxsulotTuri} </p>
                <p>Sifat: {this.state.Sifat}</p>
                <p>Narxi: {this.state.Narxi}</p>
                <button onClick={this.changeNames} > uzgar </button>
            </div>
        )
    }
}

export default App; 