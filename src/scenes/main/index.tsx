import {Canvas} from "@react-three/fiber";
import MainCamera from "../../components/three-assets/camera/main";
import Torus from "../../components/three-assets/objects/test/torus.tsx";
import {OrbitControls} from "@react-three/drei";
import MainLight from "../../components/three-assets/lights/main";
import MasterMind from "../../components/three-assets/objects/master-mind";

export default function MainScene() {

    return (
        <Canvas shadows  >
            <MainCamera />
            <ambientLight intensity={1}  />
            <directionalLight
                position={[0, 10, 0]}
                intensity={2}
                color="#ffffff"
            />
            <pointLight
                position={[0, 5, 0]}
                intensity={5}
                color="#CBFFEE"
            />
            <pointLight
                position={[-2, 5, 5]}
                intensity={5}
                color="#CBFFEE"
            />
            <pointLight
                position={[-6, 5, 5]}
                intensity={5}
                color="#CBFFEE"
            />
            {/*<ambientLight intensity={0.1} />*/}
            <MasterMind />
            <OrbitControls />
        </Canvas>
    )
}