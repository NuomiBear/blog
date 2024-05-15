import React, { Component } from 'react';

class AppClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
        <div>
            <p>GUNDAM:{this.state.count}</p>
            <button onClick={() => {
                this.incrementCount()
            }}>GUNDAM</button>
        </div>
        )
    }
}

export default AppClass