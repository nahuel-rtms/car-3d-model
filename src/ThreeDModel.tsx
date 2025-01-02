import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function ThreeDModel() {
  const gltf = useLoader(GLTFLoader, '/models/scene.gltf')
  return (
    <mesh>
      <primitive object={gltf.scene} />
    </mesh>
  )
}

export default ThreeDModel