import nfc from './proj.svg';
import './App.css';
import Scan from './containers/Scan';
import Write from './containers/Write';
import { useState,useEffect } from 'react';
import { ActionsContext } from './contexts/context';
import Swal from 'sweetalert2';


function App() {

  const [actions, setActions] = useState(null);
  const {scan, write,toggle} = actions || {};

  const actionsValue = {actions,setActions};

  const onHandleAction = (actions) =>{
    setActions({...actions});
  }

  const Show = ()=>{
    Swal.fire({
      title : "Instructions",
      html:"<ol> <li>To know the details of the NFC card, tap on scan and bring it near the device.</li><li>To change the nfc card's information , tap on write button , paste the new link, click on save, tap on scan button and bring the card near the device. </li></ol>",
  })
  }

  useEffect(()=>{
    Show();
   }
  , [])
  


  return (
      <div className="App">
        <div className = "header-image">
        </div>
        <div className="App-container">
          <button onClick={()=>onHandleAction({scan: 'scanning', write: null, toggle:null})} className="btn">Scan</button>
          <button onClick={()=>onHandleAction({scan: null, write: 'writing',toggle:(!toggle)})} className="btn">Write</button>
        </div>
        <ActionsContext.Provider value={actionsValue}>
          {scan && <Scan/>}
          {write && <Write toggle = {toggle} actions = {actions} setActions = {setActions} />}
        </ActionsContext.Provider>
      </div>
  );
}

export default App;
