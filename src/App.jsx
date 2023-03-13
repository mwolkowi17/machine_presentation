
import React, {useState} from 'react';
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
// import { Shaft } from './Loader';
import { Bearing } from './Loader2';
import { Button1 } from './Button';


function App() {
  
 
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
        {/* <Shaft ref={mesh} obrot={ifMotion}/> */}
        <Bearing obrot={ifMotion}/>
        <OrbitControls />
      </Canvas>,
      <Button1 click={(e)=>{setMotion(!motion)}} />
     
    </div>
  );
}

export default App;
