import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sky, OrbitControls } from '@react-three/drei'
import 'twin.macro'

const Dodecahedron = props => {
  const mesh = useRef()
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  let time = Date.now()
  useFrame(() => {
    const currentTime = Date.now()
    const dt = currentTime - time
    time = currentTime
    mesh.current.rotation.x = mesh.current.rotation.y += 0.002 * dt
  })

  return (
      <mesh
        {...props}
          ref={mesh}
          scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
          onClick={e => setActive(!active)}
          onPointerOver={e => setHover(true)}
          onPointerOut={e => setHover(false)}
    >
      <dodecahedronBufferGeometry attach="geometry" args={[1, 0]} />
          <meshPhongMaterial
              attach="material"
              color={hover ? 'hotpink' : 'grey'}
      />
      </mesh>
  )
}

export default function Scene () {
  return (
    <div tw='fixed h-full w-full z-index[-1]'>
      <Canvas>
        <color attach='background' args={['black']} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Dodecahedron />
          <Sky />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
