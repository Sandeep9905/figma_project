import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from "./NavBar";
import Main from "./Main";

const suggestion_data = [
  'React.js', 'Render.js', 'Axios.js',
  'Angular.js', 'Roaster.js', 'View.js', 'Bootstrap'
  , 'Bango', 'D3.js', 'Java', 'JavaScript', 'C++', 'Python'
  , 'Panda', 'AntDesign', 'Data Structures', 'Alogrithm'
]

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [notify, setNotifications] = useState('Saved');

  //here we call api for suggestions data
  useEffect(() => {
    setSuggestions(suggestion_data)
  }, []);

  //notify user that data is saved!
  const makeNotificationCall = () => {
    setNotifications('saving...')
    setTimeout(() => {
      setNotifications('Saved')
    }, 2000)
  }

  return (
    <div className="App">
      <NavBar notify={notify} />
      <Main makeNotification={makeNotificationCall} suggestions={suggestions} />
    </div>
  );
}

export default App;
