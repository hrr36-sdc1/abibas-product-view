import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './Components/navigation';
import Main from './Components/main';

const App = () => (
  <div>
    <NavBar />
    <Main />
  </div>
);

ReactDom.render(<App />, document.getElementById('app'));
