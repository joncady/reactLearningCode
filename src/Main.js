import React, { Component } from 'react';

// here we are exporting Main as a variable for Main.js, meaning it can be accessed using
// import { Main } from './Main';
export class Main extends Component {

    // Similar to other OOP languages (JS isn't actually one, but fakes it), Components have a construtor
    // Use this only if you want access to props or state before the other functions of the component
    // Also useful for setting default of states, only create a constructor if you're going to use it for states!
    constructor() {
        super();
        // this.state is a something creating by the super constructor, can be accessed anywhere in the component
        this.state = {
            hi: 'hello',
            array: ['hello', 'hi', 'sup'],
            stateText: '',
            name: ''
        }
    }

    // this is a function for the Main class, it can be called using this.updateValue(...)
    // this is very useful because we can update any state using this function
    // it sets adds or alters (if the key already exists), the key value pair in the this.state variable
    updateValue(key, value) {
        // ex:
        // key = stateText, value = input-value
        // [key] -> stateText: value
        this.setState({
            [key]: value
        });
    }

    // this notation binds the 'this' keyword to refer to 'this' component
    // this will make more sense once we start passing functions as props
    addGreeting = () => {
        // get past greetings, add the current text in the input box
        // and then set the array key in the state variable, and reset text
        // You'll notice that the text in the input box disappears since it is set by this.state.stateText
        let greetingArray = this.state.array;
        greetingArray.push(this.state.stateText);
        this.setState({
            array: greetingArray,
            stateText: ''
        });
    }

    // this function will be called once the component is loaded, and we can start editing stuff in it
    // useful for APIs, we make call, and then change the state once the response is recieved!
    // this is only called when the component is initially rendered, never again, unless you un-render it
    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                response: data.message
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* now we use the prop we passed in!
                the {} means we can type in raw JavaScript, which will be turned into text and interpreted */}
                <h1>{this.props.hello}</h1>
                {/* we can use the value we set in the constructor here! */}
                <h1>Input: {this.state.stateText}</h1>
                {/* an array of JSX elements can be interpreted!
                Here, we use the map function for an array, which applies a function that is passed in, to every single index
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map  */}
                {this.state.array.map((greeting, i) => {
                    // we actually can return JSX here, which we replace with the values in the array (greeting)
                    // key is keyword that React wants us to add to elements in an array
                    // it is used to uniquely identify elements and remove them if need be
                    return <h3 key={"greeting" + i}>{greeting}</h3>;
                })}
                {/* - we can set the value to be whats in the state! 
                - This keeps the state linked up with what's in the box, and vice-versa.
                - onChange is also a keyword for input tags, it is called whenever the input inside is changed.
                - We can pass in the value of the input box, using event.target.value.
                - event is what is passed from the onChange into our callback function.
                - it has a target value, which refers to the input element
                - target has a value, which is the value that is inside the input box
                - We pass the key to set (stateText) and the value to the updateValue function in our class */}
                <input value={this.state.stateText} placeholder="Type a greeting to add" onChange={(event) => {
                    this.updateValue("stateText", event.target.value);
                }}></input>
                {/* onClick triggers the addGreeting method from this class */}
                <button onClick={this.addGreeting}>Add</button>
                {/* same thing is happening here, except we are setting a different key, this time 'name' */}
                <div>
                    <input value={this.state.name} placeholder="Name key is set" onChange={(event) => {
                        this.updateValue("name", event.target.value);
                    }}></input>
                </div>
                {/* inline ternary statement */}
                {/* condition ? true-statement : false-statement */}
                {/* When this.state.response is null, the false condition will occur, and when
                it is not null, the true condition will occur. This allows the dog picture to show up once the 
                response is returned! */}
                {this.state.response ? <div style={{ marginTop: '3rem' }}><img alt="Dog" width="200" src={this.state.response}></img></div> : <h1>No data</h1>}
            </React.Fragment>
        );
    }

}

/*
    --- End of tutorial! ---
    - Try making a component for yourself and adding some cool stuff to it!
    - Let me know if you have questions.
    - Check here for more info and for reference: https://info340.github.io/react.html
*/

