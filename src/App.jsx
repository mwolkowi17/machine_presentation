
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Shaft } from './Loader';
import { Bearing } from './Loader2';
import { Button1 } from './Button';


function App() {

  //menu test
  const [selectedFruit, setSelectedFruit] = useState('1');
  //end
  const [ifOne, SetifOne] = useState(false)
  const [ifTwo, SetifTwo] = useState(true)

  const [motion, setMotion] = useState(true)

  const ifMotion = motion ? 1 : 0

  const changingValues=()=>{
    if(selectedFruit==='1'){
      SetifOne(true)
      SetifTwo(false)
    }
    if(selectedFruit==='2'){
      SetifOne(false)
      SetifTwo(true)
    }
  }
 
  useEffect(()=>{
    console.log(selectedFruit);
    changingValues();
    console.log("ifOne="+ifOne);
    console.log("ifTwo="+ifTwo)
  })

  return (
    <div className="App">
      <Canvas
        camera={{ position: [0, 0, 3] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, 5, 10]} />
        <pointLight position={[-10, 10, -10]} />
        {ifOne === true &&
          <Shaft obrot={ifMotion} />
        }

        {ifTwo === true &&
          <Bearing obrot={ifMotion} />
        }
        <OrbitControls />
      </Canvas>,
      <Button1 click={(e) => { setMotion(!motion) }} />
      <select
        value={selectedFruit} // ...force the select's value to match the state variable...
        onChange={e =>{ setSelectedFruit(e.target.value);
        }} // ... and update the state variable on any change!
      >
        
        <option value="1">Sprzęgło</option>
        <option value="2">Łożysko</option>
        <option value="3">Orange</option>
      </select>
    </div>
  );
}

export default App;
