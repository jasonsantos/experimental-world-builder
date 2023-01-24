import { FlyControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";

const bg = new Color("#c0c4fc").convertLinearToSRGB().getHex();

export default function App() {
  return (
    <Canvas camera={{ position: [-2, 2, 5] }}>
      <color args={[bg]} attach="background" />

      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <spotLight intensity={0.6} position={[2, -2, -3]} />

      <mesh>
        <meshStandardMaterial color="#5B21B6" />
        <boxGeometry />
      </mesh>
      <FlyControls />
    </Canvas>
  );
}
