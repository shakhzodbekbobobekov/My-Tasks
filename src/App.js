// import React from "react";


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         }
//     }

//     addOne = () => {
//         this.setState(({ count: this.state.count + 1 }), () => console.log('qushildi'));
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Cunter: {this.state.count} </h1>
//                 <button onClick={this.addOne} > click++ </button>
//                 <button> click-- </button>
//             </div>
//         )
//     }
// }

// export default App; 


import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    addOne = () => {
        this.setState({ count: this.state.count + 1 })
    }

    minus = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })

        }
    }

    render() {
        return (
            <div>
                <h1> Count:{this.state.count} </h1>
                <button onClick={this.addOne} >Click Me ++</button>
                <button onClick={this.minus} >Click Me --</button>
            </div>
        )
    }

}

export default App