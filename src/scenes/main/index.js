import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Canvas } from "@react-three/fiber";
import MainCamera from "../../components/three-assets/camera/main";
import { OrbitControls } from "@react-three/drei";
import MasterMind from "../../components/three-assets/objects/master-mind";
export default function MainScene() {
    return (_jsxs(Canvas, { shadows: true, children: [_jsx(MainCamera, {}), _jsx("ambientLight", { intensity: 0.5 }), _jsx(MasterMind, {}), _jsx(OrbitControls, {})] }));
}
