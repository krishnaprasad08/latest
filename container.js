import React, { Component } from 'react';
import './container.css';
import Tabledata from './submittable';
import DropdownList from './dropdownlist';
import TextBox from './textbox.js';
import Tab from './tab.js';
import Anchor from'./anchor.js';
import Swipe from './swipehours.js';
import Holiday from './holiday.js';
import Button from './button.js';
class FullContainer extends Component {
        constructor(props){
        super(props);
        this.state = {
            swipeHours :this.props.report.hours?this.props.report.hours: ["","","","",""]
        }
        this.updateSwipehours = this.updateSwipehours.bind(this);
    }
    updateSwipehours(day,hour){
        var swipehours = this.state.swipeHours;
        swipehours[day] = hour
        this.setState({
            swipeHours : swipehours
        })
    }
    render() {
        return (


            <div id="Outer">

                <fieldset>
                    <h2>
                        Time Report
        </h2>
                    <div className="first">
                        <span className="name">Krishna Id</span>
                        <span className="TimeReport">Time Report Id</span>
                    </div>
                    <div className="Second">
                        <span>Period End Date:06/30/2017</span>
                        <span>version:original</span>
                    </div>

                    <Tabledata />
                    <Swipe report={this.props.report} updateSwipehours={this.updateSwipehours}/>
                   
                    <Holiday/>
                    <button onClick={e=>{this.props.addReport(this.props.report.id,this.state.swipeHours)}}>Submit</button>
 
  
      


                </fieldset>
            </div>




        );
    }
}
export default FullContainer;