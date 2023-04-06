
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei';
import { Shaft } from './Loader';
import { Bearing } from './Loader2';
import { Gear } from './Loader3';
import { Button1 } from './Button';


function App() {

  //menu test
  const [selectedFruit, setSelectedFruit] = useState('1');
  //end


  const [motion, setMotion] = useState(true)

  const ifMotion = motion ? 1 : 0

  const LoafdingInfo = () => {
    return <Html center style={{ color: 'white' }}>loading...</Html>
  }



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
          <Suspense fallback={<LoafdingInfo />}>
            <Shaft obrot={ifMotion} />
          </Suspense>
        }

        {selectedFruit === "2" &&
          <Suspense fallback={<LoafdingInfo />}>
            <Bearing obrot={ifMotion} />
          </Suspense>
        }
        {selectedFruit === "3" &&
          <Suspense fallback={<LoafdingInfo />}>
            <Gear obrot={ifMotion} />
          </Suspense>
        }
        <OrbitControls />
      </Canvas>,
      <Button1 click={(e) => { setMotion(!motion) }} />
      <select
        className='Selector'
        value={selectedFruit} // ...force the select's value to match the state variable...
        onChange={e => {
          setSelectedFruit(e.target.value);
        }} // ... and update the state variable on any change!
      >

        <option value="1">Sprzęgło</option>
        <option value="2">Łożysko</option>
        <option value="3">Gear</option>
      </select>
    </div>
  );
}

export default App;
