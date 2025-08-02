import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useMemo } from 'react';
import { Object3D, AnimationMixer, MeshStandardMaterial, VideoTexture, LinearFilter, RGBFormat } from 'three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
    position?: [number, number, number] | [0, 0, 0];
}

export default function MasterMind({ position = [0, 0, 0] }: Props) {
    const { scene } = useGLTF('./glbs/sculpt-face.glb');

    return <primitive object={scene} position={position} rotation={[0, 0, 0]} />;
}
