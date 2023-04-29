import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { useRef, Suspense, useMemo } from 'react';


export const Bearing = (props) => {
    const gltf = useLoader(GLTFLoader, '/models/lozysko_for_app.glb')
    const gltfcopy = useMemo(() => gltf.scene.clone(), [gltf.scene])
    const mesh = useRef()
    useFrame((state, delta) => (mesh.current.rotation.y -= props.obrot * delta))

    return (
        <>
            <Suspense fallback={null}>
                <primitive object={gltfcopy} dispose={null} ref={mesh} />
            </Suspense>
        </>
    )
}