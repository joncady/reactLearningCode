import React, { Component } from 'react';

export class Main extends Component {

    constructor() {
        super();
        this.state = {
            hi: 'hello',
            array: ['hello', 'hi', 'sup'],
            stateText: '',
            name: ''
        }
    }
    
    // useful for APIs
    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                response: data.message      
            })
        })
    }

    updateValue(type, text) {
        // [type] -> stateText: text
        this.setState({
            [type]: text
        });
    }

    addGreeting = () => {
        let array = this.state.array;
        array.push(this.state.stateText);
        this.setState({
            array: array,
            stateText: ''
        });
    }

    render() {
        return (
            <React.Fragment>
                {/* inline ternary statement */}
                {/* condition ? true-statement : false-statement */}
                {this.state.response ? <img src={this.state.response}></img> : <h1>No data</h1>}
                <h1>{this.state.stateText}</h1>
                {this.state.array.map((greeting, i) => {
                    return <h1 key={"greeting" + i}>{greeting}</h1>;
                })}
                <input value={this.state.stateText} onChange={(event) => {
                    this.updateValue("stateText", event.target.value);
                }}></input>
                <input value={this.state.name} onChange={(event) => {
                    this.updateValue("name", event.target.value);
                }}></input>
                <button onClick={this.addGreeting}>Add</button>
            </React.Fragment>
        );
    }

}

