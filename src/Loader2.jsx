import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, {useRef} from 'react';


export const Bearing=(props)=>{
    const gltf = useLoader(GLTFLoader, '/models/lozysko_for_app.glb')
    const mesh = useRef()
    useFrame((state, delta) => (mesh.current.rotation.y -=props.obrot*delta))
    
    return(
        <>
        {props.action}
        <primitive object={gltf.scene} dispose={null} ref={mesh} />
       
        </>
    )
}