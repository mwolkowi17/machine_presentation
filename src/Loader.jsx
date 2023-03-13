import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { useRef,Suspense, useMemo } from 'react';


export const Shaft = (props) => {
    const gltf = useLoader(GLTFLoader, '/models/sprzeglo_klowe_for_app.glb')
    const gltfcopy = useMemo(() => gltf.scene.clone(), [gltf.scene])
    const mesh = useRef()
    useFrame((state, delta) => (mesh.current.rotation.x -= props.obrot * delta))

    return (
        <>
            <Suspense fallback={null}>
                <primitive object={gltfcopy} dispose={null} ref={mesh} />
            </Suspense>
        </>
    )
}