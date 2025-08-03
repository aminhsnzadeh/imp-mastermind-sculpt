import { jsx as _jsx } from "react/jsx-runtime";
import { useGLTF } from '@react-three/drei';
export default function MasterMind({ position = [0, 0, 0] }) {
    const { scene } = useGLTF('./glbs/sculpt-face.glb');
    return _jsx("primitive", { object: scene, position: position, rotation: [0, 0, 0] });
}
