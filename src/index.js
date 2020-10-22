import React from 'react';
import ReactDOM from 'react-dom';

let h1 = React.createElement('h1', null, 'Hello World!')

class HelloWorld extends React.Component {
  render () {
    if(this.props.heading) return <h1>hello</h1>
    else return <p>Hello</p> 
  }
}

ReactDOM.render(
  React.createElement('div', null, React.createElement(HelloWorld), React.createElement(HelloWorld), React.createElement(HelloWorld)),
  document.getElementById('root')
);
  