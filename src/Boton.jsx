import React from 'react';

class Boton extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "blanco"
        }
        this.handleColorChange = this.handleColorChange(this);
        console.log(this.state);
    }

    handleColorChange() {
        this.setState({
            color: "rojo"
        })
        //console.log(this.setState);
    }

    render() {
        return (
            <button onClick={this.handleColorChange}>Click me!</button>
        );
    }
}

export default Boton;