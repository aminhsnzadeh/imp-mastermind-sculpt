import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

export default function MainCamera() {

    const camRef = useRef(null)
    const isMobilePoint: boolean = window.innerWidth <= 768
    const responsivePosition: [number, number, number] = isMobilePoint ? [0, 10, 0] : [0, 10, 0]
    const responsiveYRotation = 0

    return (
        <>
            <PerspectiveCamera
                ref={camRef}
                // makeDefault
                position={responsivePosition}
                rotation={[0, responsiveYRotation, 0]}
                fov={50}
            />
        </>
    )
}