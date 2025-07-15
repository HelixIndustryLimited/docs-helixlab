/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  useFBO,
  Image,
  Preload,
  MeshTransmissionMaterial,
} from '@react-three/drei'
import { easing } from 'maath'

export default function SimpleFluidGlass({
  imageSrc = 'https://cdn.shopify.com/s/files/1/0444/8259/2928/files/7.png?v=1752563117',
  scale = 0.25,
  ior = 1.15,
  thickness = 5,
  chromaticAberration = 0.1,
  anisotropy = 0.01
}) {
  const [isMouseOver, setIsMouseOver] = useState(true)
  const [timeoutId, setTimeoutId] = useState(null)
  
  const handlePointerEnter = () => {
    // Clear any pending timeout
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setIsMouseOver(true)
  }
  
  const handlePointerLeave = () => {
    // Set a 0.3s delay before hiding
    const id = setTimeout(() => {
      setIsMouseOver(false)
      setTimeoutId(null)
    }, 300)
    setTimeoutId(id)
  }
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])
  
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Scene 
        imageSrc={imageSrc}
        scale={scale}
        ior={ior}
        thickness={thickness}
        chromaticAberration={chromaticAberration}
        anisotropy={anisotropy}
        isMouseOver={isMouseOver}
      />
      <Preload />
    </Canvas>
  )
}

function Scene({ imageSrc, scale, ior, thickness, chromaticAberration, anisotropy, isMouseOver }) {
  const lensRef = useRef()
  const buffer = useFBO()
  const { viewport, scene, camera } = useThree()
  const imageRef = useRef()

  useFrame((state, delta) => {
    const { gl, pointer } = state
    
    if (lensRef.current) {
      // Follow mouse pointer
      const x = (pointer.x * viewport.width) / 2
      const y = (pointer.y * viewport.height) / 2
      easing.damp3(lensRef.current.position, [x, y, 0], 0.15, delta)
      
      // Animate scale based on mouse over state (0.5s transition)
      const targetScale = isMouseOver ? scale : 0
      easing.damp3(lensRef.current.scale, [targetScale, targetScale, targetScale], 0.08, delta)
    }

    // Hide lens temporarily, render background to buffer, then show lens again
    if (lensRef.current) {
      lensRef.current.visible = false
    }
    
    gl.setRenderTarget(buffer)
    gl.render(scene, camera)
    gl.setRenderTarget(null)
    
    if (lensRef.current) {
      lensRef.current.visible = true
    }
  })

  return (
    <>
      {/* Background image */}
      <Image
        ref={imageRef}
        url={imageSrc}
        scale={[viewport.width * 1.1, viewport.height * 1.1, 1]}
        position={[0, 0, -1]}
        fit="cover"
      />

      {/* Lens - using sphere geometry instead of .glb */}
      <mesh
        ref={lensRef}
        scale={scale}
        position={[0, 0, 0]}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior}
          thickness={thickness}
          anisotropy={anisotropy}
          chromaticAberration={chromaticAberration}
          transmission={1}
          roughness={0}
          transparent
          color="#ffffff"
          attenuationColor="#ffffff"
          attenuationDistance={0.5}
        />
      </mesh>

    </>
  )
}