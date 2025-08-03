import {Canvas} from "@react-three/fiber";
import MainCamera from "../../components/three-assets/camera/main/index.tsx";
import Torus from "../../components/three-assets/objects/test/torus.tsx";
import {OrbitControls} from "@react-three/drei";
import MainLight from "../../components/three-assets/lights/main";
import MasterMind from "../../components/three-assets/objects/master-mind";

export default function MainScene() {

    return (
        <Canvas shadows >
            <ambientLight intensity={0.5}  />
            {/*<MainCamera />*/}
            {/*<ambientLight intensity={0.1} />*/}
            <MasterMind />
            <OrbitControls />
        </Canvas>
    )
}