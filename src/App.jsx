
import React, {useState,useRef} from 'react';
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Shaft } from './Loader';
import { Button1 } from './Button';


function App() {
  
  const mesh = useRef()
  const [motion,setMotion]=useState(true)
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
        <Shaft ref={mesh} obrot={ifMotion}/>
        <OrbitControls />
      </Canvas>,
      <Button1 click={(e)=>{setMotion(!motion)}} />
      <p className='info'>To start/pause motion click on model</p>
    </div>
  );
}

export default App;
