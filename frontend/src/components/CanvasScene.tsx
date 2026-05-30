import { Canvas } from '@react-three/fiber'
import { Float, Environment, OrbitControls } from '@react-three/drei'

function OrbitalShape() {
  return (
    <Float floatIntensity={1.5} rotationIntensity={0.8} speed={1.2}>
      <mesh castShadow receiveShadow rotation={[0.86, 0.16, 0.67]}>
        <torusKnotGeometry args={[0.9, 0.22, 168, 34]} />
        <meshStandardMaterial color="#111111" roughness={0.15} metalness={0.9} />
      </mesh>
    </Float>
  )
}

export default function CanvasScene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
        <ambientLight intensity={0.65} />
        <directionalLight color="#ffffff" intensity={0.5} position={[3, 2, 5]} />
        <OrbitalShape />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
