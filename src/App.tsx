import { Canvas } from "@react-three/fiber"
import { CameraControls, CameraShake, DragControls, GizmoHelper, GizmoViewport, Html, TransformControls } from "@react-three/drei"
import ThreeDModel from "./ThreeDModel"

function App() {

  const config = {
    maxYaw: 0.1, // Max amount camera can yaw in either direction
    maxPitch: 0.1, // Max amount camera can pitch in either direction
    maxRoll: 0.1, // Max amount camera can roll in either direction
    yawFrequency: 0.1, // Frequency of the yaw rotation
    pitchFrequency: 0.1, // Frequency of the pitch rotation
    rollFrequency: 0.1, // Frequency of the roll rotation
    intensity: 1, // initial intensity of the shake
    decay: false, // should the intensity decay over time
    decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
    controls: undefined, // if using orbit controls, pass a ref here so we can update the rotation
  }

  return (
    <div id="canvas-container" className="h-screen w-screen">
      <Canvas>

        <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        </GizmoHelper>
        <CameraShake {...config} />

        <TransformControls mode="translate">
          <Html position={[1, 1, 1]}>
            <div className="p-2 bg-white rounded shadow-md">
              <p className="text-sm text-black">Hola desde JSX</p>
              <button className="px-2 py-1 mt-2 text-sm text-white bg-blue-500 rounded">
                Click Aquí
              </button>
            </div>
          </Html>

        <DragControls>
          <ThreeDModel />
        </DragControls>
        </TransformControls>

        <CameraControls makeDefault />
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[10, 10, 10]} />
      </Canvas>
    </div>
  )
}

export default App
