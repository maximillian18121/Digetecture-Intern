import React from 'react';
import './Writer.css';
import Save from '../SVGs/save';
import Swal from 'sweetalert2';


const Writer = ({writeFn,toggle,actions,setActions}) => {
    const [message, setMessage] = React.useState('');
    const [save,setSave] = React.useState(true);

    const onHandleAction = (actions) =>{
        setActions({...actions});
      }

    const onSave = (e) => {
        e.preventDefault();
        writeFn(message);
        setMessage('');
        onHandleAction({scan: null, write: 'writing',toggle:false});
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your URL has been saved',
            showConfirmButton: false,
            timer: 1500
          })

    };
    console.log(toggle);
    return (
      <>
      { toggle &&
        <form onSubmit={onSave}>
            <div className="writer-container">
                <input type="text" placeholder="Enter Message..." value={message} onChange={(e)=>setMessage(e.target.value)}></input>
                <button className="btn" type="submit">
                    <Save/>
                    Save
                </button>
            </div>
        </form>}
      </>
    );
};

export default Writer;