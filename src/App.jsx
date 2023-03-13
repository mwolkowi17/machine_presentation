
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Shaft } from './Loader';
import { Bearing } from './Loader2';
import { Button1 } from './Button';


function App() {

  //menu test
  const [selectedFruit, setSelectedFruit] = useState('1');
  //end
 

  const [motion, setMotion] = useState(true)

  const ifMotion = motion ? 1 : 0 
 

  return (
    <div className="App">
      <Canvas
        camera={{ position: [0, 0, 3] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, 5, 10]} />
        <pointLight position={[-10, 10, -10]} />
        {selectedFruit === "1" &&
          <Shaft obrot={ifMotion} />
        }

        {selectedFruit === "2" &&
          <Bearing obrot={ifMotion} />
        }
        <OrbitControls />
      </Canvas>,
      <Button1 click={(e) => { setMotion(!motion) }} />
      <select
        className = 'Selector'
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
