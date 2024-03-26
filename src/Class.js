import './Class.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Class extends React.Component {
    constructor(props) {
        console.log('props',props)
        // 调用父类的构造函数并传递props 以便继承父类的属性和方法
        // super(props)
        this.classA = 'classA'
    }

    render() {
        return <span>GUNDAM</span>
    }
}

export default Class;