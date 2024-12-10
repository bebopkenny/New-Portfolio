// Importing essential libraries from react-three and React
import { Canvas, useFrame } from "@react-three/fiber"; // Canvas is the 3D rendering context, useFrame allows animation
import { OrbitControls, Sparkles } from "@react-three/drei"; // Provides mouse controls for zooming, panning, and rotating the scene
import { useRef } from "react"; // React hook for referencing and manipulating DOM/mesh elements

// A functional component that creates a rotating cylinder
const RotatingCube = () => {
  const meshRef = useRef(); // Reference to the cylinder mesh object

  // Animates the cylinder by updating its rotation on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Slowly rotate on the X-axis
      meshRef.current.rotation.y += 0.01; // Slowly rotate on the Y-axis
    }
  });

  return (
    // Return a 3D mesh (geometry + material) with the ref to enable animation
    <mesh ref={meshRef}>
      {/* Cylinder geometry with top/bottom radii, height, and smoothness */}
      <cylinderGeometry args={[1, 1, 1]} />
      {/* Material with a base color and emissive property for glowing effect */}
      <meshLambertMaterial color="#468585" emissive="#468585" />

      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="Orange" />
    </mesh>
  );
};

// Main component rendering the scene
const App = () => {
  return (
    // Canvas initializes the 3D scene and acts as a container for 3D objects
    <Canvas
      style={{
        height: "100vh", // Full viewport height
        width: "100vw",  // Full viewport width
      }}
    >
      {/* Controls to interact with the 3D scene */}
      <OrbitControls enableZoom enablePan enableRotate />

      {/* Directional light to illuminate the objects in the scene */}
      <directionalLight
        position={[1, 1, 1]} // Light position in the scene
        intensity={1} // Adjust brightness of the light
        color={0x9CDBA6} // Light color (soft greenish hue)
      />

      {/* Background color of the 3D scene */}
      <color attach="background" args={["#F0F0F0"]} />

      {/* Add the rotating cylinder to the scene */}
      <RotatingCube />
    </Canvas>
  );
};

export default App; // Export the main App component for rendering
