import React, {useState} from 'react'

import './App.css';
import Title from './components/shared/Title';
import Control from './components/Control';
import FormAdd from './components/Form';
import List from './components/List';
function App() {
  const [item, setItem] = useState({
    items: [
      {
        name: 'ABC',
        level: 0
      },
      {
        name: 'DEF',
        level: 1
      },
      {
        name: 'GHI',
        level: 2
      }
    ]
  });
  console.log(item);
  return (
    
    <div className="container">
      <Title />
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      <FormAdd />
      {/* FORM : END */}
      {/* LIST : START */}
      <List items={item}/>
    </div>

  );
}

export default App;
