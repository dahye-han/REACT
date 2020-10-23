import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render () {
    return React.createElement(
      'h1', this.props, 'Hello ' + this.props.frameworkName + ' world!!'
    ) 
  }
}

class DateTimeNow extends React.Component {
  render() {
    let dateTimeNow = new Date().toLocaleString()
    return React.createElement(
      'span',
      null,
      'Current date and time is ${dateTimeNow}'
    )
  }
}

ReactDOM.render(
  React.createElement(
    'div', 
    null, 
    React.createElement(DateTimeNow),
    React.createElement(HelloWorld, {
      if: 'ember',
      frameworkName: 'Ember.js',
      title: 'A framework for creating ambitious web applications.'}),
    React.createElement(HelloWorld, {
      if: 'backbone',
      frameworkName: 'Backbone.js',
      title: 'Backbone.js gives structure to web applications...'}),
    React.createElement(HelloWorld, {
      if: 'angular',
      frameworkName: 'Angular.js',
      title: 'Superheroic JavaScript MVW Framework'})
      ),
  document.getElementById('root')
);
  