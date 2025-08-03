import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

export default function MainCamera() {

    const camRef = useRef(null)
    const isMobilePoint: boolean = window.innerWidth <= 768
    const responsivePosition: [number, number, number] = isMobilePoint ? [0, 0, 8] : [0, 0, 8]

    return (
        <>
            <PerspectiveCamera
                ref={camRef}
                makeDefault
                position={responsivePosition}

                fov={50}
            />
        </>
    )
}