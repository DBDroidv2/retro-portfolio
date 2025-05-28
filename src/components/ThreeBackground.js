"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import { EffectComposer, ChromaticAberration, Glitch } from '@react-three/postprocessing';
import * as THREE from 'three';
import MeteorSystem from './MeteorSystem'; // Add this line

const STAR_COUNT = 1500; // Number of stars
const CONNECTION_DISTANCE_THRESHOLD = 2.5; // Increased for more connections
const STAR_SPREAD_RADIUS = 50; // How far out stars can go

function Constellation() {
  const groupRef = useRef();

  // Generate star positions
  const starPositions = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      // Spherical distribution for a more "sky-like" feel, pushed further away
      const r = STAR_SPREAD_RADIUS * (0.5 + Math.random() * 0.5); // Stars further out
      const phi = Math.acos(2 * Math.random() - 1); // inclination
      const theta = Math.random() * 2 * Math.PI; // azimuth

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - STAR_SPREAD_RADIUS * 0.5; // Push depth
    }
    return positions;
  }, []);

  // Generate lines between nearby stars
  const lines = useMemo(() => {
    const points = [];
    const starVectors = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      starVectors.push(new THREE.Vector3(starPositions[i * 3], starPositions[i * 3 + 1], starPositions[i * 3 + 2]));
    }

    for (let i = 0; i < STAR_COUNT; i++) {
      for (let j = i + 1; j < STAR_COUNT; j++) {
        const dist = starVectors[i].distanceTo(starVectors[j]);
        if (dist < CONNECTION_DISTANCE_THRESHOLD) {
          points.push(starVectors[i], starVectors[j]);
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    return lineGeometry;
  }, [starPositions]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02; // Slow rotation of the whole constellation
      groupRef.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={STAR_COUNT}
            array={starPositions}
            itemSize={3}
          />
        </bufferGeometry>
        {/* Use PointMaterial for round stars, made more subtle */}
        <PointMaterial
          transparent
          color="#FFFFFF"
          size={0.5} // Made smaller for subtlety
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
      {lines && (
        <lineSegments geometry={lines}>
          <lineBasicMaterial attach="material" color="#00D8FF" transparent opacity={0.6} linewidth={1} /> {/* Increased opacity */}
        </lineSegments>
      )}
    </group>
  );
}

const ThreeBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <Constellation />
        <MeteorSystem />
        {/* Removed EffectComposer and global glitch effects */}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
