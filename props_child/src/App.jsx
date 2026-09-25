import { useState } from 'react'
// import Raghu from './components/raghu'
// import Button from './components/Button'
import Card from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("")

  // function handleclick(){
  //   setCount(count+1);
  // }
  return (
    <>
      <div>

       <Card name ={name} setname={setname} />
       <p>i am parent components {name}</p>


        {/* <Button handleclick ={handleclick}
          text="click here">
            <h1> {count}</h1>

        </Button>
      */}


      {/* <Raghu name="aniket">
        <h1>props children</h1>
         <p>dnfldsfilsffullore Lorem, ipsum.</p>
         
      </Raghu> */}

      
      </div>
    </>
  )
}

export default App
