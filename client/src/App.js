import React, { useState } from 'react';
import axios from 'axios';
import ActionsForm from './components/ActionsForm';
import ActionsDisplay from './components/ActionsDisplay';

import './App.css';

const App = ()=> {
  const [actions, setActions] = useState([]);

  const getActions = () => {
    console.log('its working!')
    axios
    .get('http://localhost:5001/api/actions')
    .then(res => {
      console.log('response from axios', res.data);
      setActions(res.data);
    })
    .catch(err => {
      console.log(`${err}`)
    });
  };


  return (
    <div className="App">
      <p>Actions Are Us!</p>
      <ActionsForm getActionsBtn={getActions} />
      <ActionsDisplay actionsDisplay={actions} />
    </div>
  );
}

export default App;