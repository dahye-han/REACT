import React from 'react';
import ReactDOM from 'react-dom';

let h1 = React.createElement('h1', null, 'Hello World!')

ReactDOM.render(
  React.createElement('div', null, h1, h1),
  document.getElementById('root')
);
  