import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, {useRef,useState} from 'react';


export const Shaft=(props)=>{
    const gltf = useLoader(GLTFLoader, '/models/sprzeglo_klowe_for_app.glb')
    const mesh = useRef()
    useFrame((state, delta) => (mesh.current.rotation.x -=props.obrot*delta))
    
    return(
        <>
        {props.action}
        <primitive object={gltf.scene} dispose={null} ref={mesh} />
       
        </>
    )
}