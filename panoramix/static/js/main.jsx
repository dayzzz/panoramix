import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';

var Root = React.createClass({

  render () {
    return <div>Hello, react!</div>;
  }
});

render(<Root/>, document.getElementById('root'));
