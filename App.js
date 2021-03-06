import React, { Component } from 'react';
import './App.css';
import TimeReport from './TimeReport';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      reports : [
        {
          reportId : 123,
          empId : 599480,
          empName : 'Krish',
          periodEndDate : '9/22/2017',
          version : 'original',
          status : 'Pending',
          hours : [8,9,7,8,9]
        },
         {
          reportId : 1456,
          empId : 599444,
          empName : 'Krish',
          periodEndDate : '9/22/2017',
          version : 'original',
          status : 'Pending',
          hours : [8,1,2,3,4]
        }
      ]
    };
    this.updateStatus = this.updateStatus.bind(this);
  }
  updateStatus(id,status){
    var reports = this.state.reports;
    reports = reports.map(rep => {
      if(id===rep.reportId)
      {
        rep.status = status;
      }
      return rep;
    })
    this.setState({
      reports : reports
    })
//    console.log(id,status);
  }
  addReport(id,hrs){
    var reports = this.state.reports;
    if(id && hrs){
      reports.map(rep => {
        if(rep.id === id)
        {
          rep.hours = hrs
        }
      })
    }

  }
  updateSwipe(){

  }
  render() {
    return (
      <div className="App">
      <TimeReport reports={this.state.reports} updateStatus={this.updateStatus}/>
     
      </div>
    );
  }
}

export default App;
