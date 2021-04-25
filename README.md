# About
rjs-modals is a popup modal solution for react web apps.


## Getting Started

Install with npm:
``` npm i rjs-modals```
Install with yarn
```yarn add rjs-modals```

## Include in your project
```javascript
import Modals from 'rjs-modals/Modals
```

```javascript
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
```

## Props
Props | Details
-------------------- | -------------------------
top|{100}
left|{20}
right|{20}
width|{'50%'}
height|'50%'
background|'black'
animation|'backInUp'
border|1px solid black'
modalHeader|<ModalHeader/>
modalBody|<ModalBody/>
show|{show}
setShowModal|{(val)=>setShow(val)}

https://frontend.fsdev.studio- Examples

[Demo](https://frontend.fsdev.studio)
