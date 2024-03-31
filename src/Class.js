import './Class.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Class extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return <span>GUNDAM</span>
    }
}

export default Class;