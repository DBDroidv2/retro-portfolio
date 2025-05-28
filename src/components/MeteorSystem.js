import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail, Points, PointsMaterial } from '@react-three/drei';
import { EffectComposer, Glitch, ChromaticAberration } from '@react-three/postprocessing'; // Import ChromaticAberration
import * as THREE from 'three';

function Meteor({ position, velocity, hasGlitch }) { // Add hasGlitch prop
  const ref = useRef();
  const [points, setPoints] = useState([]);

  useFrame(() => {
    const newPosition = ref.current.position.clone().add(velocity);
    setPoints([...points, newPosition]);
    ref.current.position.copy(newPosition);
    // Reset when out of bounds
    if (Math.abs(ref.current.position.x) > 20 || Math.abs(ref.current.position.y) > 10) {
      setPoints([]);
    }
  });

  return (
    <group>
      {hasGlitch ? ( // Conditionally apply glitch effect
        <EffectComposer>
          <ChromaticAberration
            offset={new THREE.Vector2(0.001, 0.001)} // Subtle RGB shift for meteors
          />
          <Glitch
            delay={[0.5, 1.5]} // Random delay for intermittent glitches
            duration={[0.1, 0.3]} // Random duration
            strength={[0.1, 0.2]} // Moderate strength
            active={true} // Active when applied
            ratio={0.8} // Affects most of the meteor
          />
          <Trail
            ref={ref}
            points={points}
            count={50}
            duration={1}
            color="#FFD700"
            resolution={256}
            depthTest={false}
          />
          <mesh position={position}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshBasicMaterial color="#FFD700" />
          </mesh>
        </EffectComposer>
      ) : (
        <>
          <Trail
            ref={ref}
            points={points}
            count={50}
            duration={1}
            color="#FFD700"
            resolution={256}
            depthTest={false}
          />
          <mesh position={position}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshBasicMaterial color="#FFD700" />
          </mesh>
        </>
      )}
    </group>
  );
}

export default function MeteorSystem() {
  const meteors = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const position = new THREE.Vector3(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        -20
      );
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        3
      );
      const hasGlitch = Math.random() < 0.3; // 30% chance of glitch
      meteors.current.push({ position, velocity, hasGlitch });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <group>
      {meteors.current.map((meteor, index) => (
        <Meteor key={index} position={meteor.position} velocity={meteor.velocity} hasGlitch={meteor.hasGlitch} />
      ))}
    </group>
  );
}
