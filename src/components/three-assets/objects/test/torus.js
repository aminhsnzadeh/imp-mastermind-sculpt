import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
export default function Torus({ position, color = "purple" }) {
    const ref = useRef(null);
    return (_jsxs("mesh", { castShadow: true, receiveShadow: true, ref: ref, position: position, rotation: [0, Math.PI / 1.5, 0], children: [_jsx("torusGeometry", { args: [0.5, 0.2, 16, 100] }), _jsx("meshStandardMaterial", { color: color })] }));
}
