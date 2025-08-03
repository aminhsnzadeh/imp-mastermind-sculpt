import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

export default function MainCamera() {

    const camRef = useRef(null)
    const isMobilePoint: boolean = window.innerWidth <= 768
    const responsivePosition: [number, number, number] = isMobilePoint ? [0, 10, 0] : [0, 10, 0]
    const responsiveYRotation = isMobilePoint ? (Math.PI / 6) : (Math.PI / 2)

    return (
        <>
            <PerspectiveCamera
                ref={camRef}
                makeDefault
                position={responsivePosition}
                rotation={[4, 3, 3]}
                fov={50}
            />
        </>
    )
}