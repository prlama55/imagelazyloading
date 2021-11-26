import React from 'react';
import ReactDOM from 'react-dom';

import Images from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <Images />
    	</div>)
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);