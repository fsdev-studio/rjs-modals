import React, { useState } from 'react';
import Modals from './components/Modals';

function ModalHeader(){
  return(
    <span>NAME OF PROJECT - <a href="https://fsdev.studio">https://Link.Link</a></span>
  )
}

function ModalBody(){
  return(
    <div style={{display:'flex', flexDirection:'row'}}>
    <img src="http://mrmrs.github.io/photos/u/011.jpg" style={{width:'50%',height:'50%',margin:45}}/>
        <div style={{color:'black', fontSize:16,background:'white',padding:45,width:'50%',height:'50%',margin:45}}>
       DESCRIPTION OF PROJECT
        </div>
        </div>
  )
}


function App(){
  const [show,setShow] = useState(false)
  return(
<div>
<button onClick={()=>setShow(true)}>SHOW MODAL</button>

    <Modals
    top={100}
    left={20}
    right={20}
    width={'50%'}
    height='50%'
    background='black'
    animation='backInUp'
    border='1px solid black'
    modalHeader=<ModalHeader/>
    modalBody =<ModalBody/>
    show={show}
    setShowModal={(val)=>setShow(val)}
    />

</div>
  )
}
export default App;
