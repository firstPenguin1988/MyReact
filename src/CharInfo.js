import React, {Component} from 'react';

class CharInfo extends Component{
    constructor(props){
        super(props);

        this.state = {
            expanded: false,
        }
    }

    open = () => {
        this.setState({expanded: !this.state.expanded})
    }

    close = () => {
        this.setState({expanded: !this.state.expanded})
    }

    render() {
        const info = this.props.charInfo;
        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Show Info</p>
        }
        return(
            <div className="user-details">
                <p className="btn btn-danger" onClick={this.close}>Hide Info</p>
                <ul>
                    <li><h2>Gender: {info.gender}</h2></li>
                    <li><h2>Birth date: {info.birth_year}</h2></li>
                    <li><h2>Height: {info.height}</h2></li>
                    <li><h2>Mass: {info.mass}</h2></li>
                </ul>
            </div>
        )
    }
}

export default CharInfo;