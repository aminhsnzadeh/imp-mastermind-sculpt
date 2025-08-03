import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
export default function MainCamera() {
    const camRef = useRef(null);
    const isMobilePoint = window.innerWidth <= 768;
    const responsivePosition = isMobilePoint ? [5, 10, 10] : [5, 10, 10];
    const responsiveYRotation = 0;
    return (_jsx(_Fragment, { children: _jsx(PerspectiveCamera, { ref: camRef, 
            // makeDefault
            position: responsivePosition, rotation: [0, responsiveYRotation, 0], fov: 50 }) }));
}
