import React, { Component } from 'react';

class NowDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //default value of the date time
      date: ''
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    that.setState({
      //Setting the value of the date time
      date:
       year + ' / ' + month + ' / ' + date 
    });
  }

  render() {
    return (
        <div>
            {this.state.date}
        </div>
    );
  }
}

export default NowDate;

