import React, { Component } from 'react';
import './tab.css';
class Tab extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : this.props.value ? this.props.value : ''
        }
        this._onChange = this._onChange.bind(this);
    }
    _onChange(e){
        this.setState({
            value : e.target.value
        },()=>this.props.updateSwipehours(this.props.day,this.state.value))
        
    }
    render() {
        var value = this.props.value ? this.props.value : '';
       
        return (

            <span className="Text1">
                <input type="text" value={this.state.value} onChange={this._onChange} className="b" />
            </span>

        );

    }
}
export default Tab;