import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows, Float, Line, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const ENABLE_MOUSE_TILT = true;
const CHIP_SCALE = 1;
const MOBILE_MAX_PIXEL_RATIO = 1.75;
const DESKTOP_MAX_PIXEL_RATIO = 2;
const CORE_GLOW_SPEED = 1.25;
const BASE_TILT = { x: 0.12, y: 0.34 };
const PACKAGE_COLOR = '#252c38';
const DIE_COLOR = '#064cb4';
const NODE_COLOR = '#58c9ff';
const TRACE_COLOR = '#25d9ff';
const PIN_COLOR = '#d5a747';

function createChipParts() {
  const pins = [];
  const traces = [];
  const pinCount = 12;
  const pinRange = 1.02;

  for (let index = 0; index < pinCount; index += 1) {
    const position = -pinRange + (index * pinRange * 2) / (pinCount - 1);
    for (const side of [-1, 1]) {
      pins.push({
        key: `z-${side}-${index}`,
        vertical: {
          position: [position, 0.105, side * 1.225],
          rotation: [0, 0, 0],
        },
        foot: {
          position: [position, 0.035, side * 1.31],
          rotation: [0, 0, 0],
        },
      });
      pins.push({
        key: `x-${side}-${index}`,
        vertical: {
          position: [side * 1.225, 0.105, position],
          rotation: [0, Math.PI / 2, 0],
        },
        foot: {
          position: [side * 1.31, 0.035, position],
          rotation: [0, Math.PI / 2, 0],
        },
      });
    }

    traces.push({
      key: `z-${index}`,
      start: [position * 0.64, 0.436, -0.77],
      middle: [position * 0.84, 0.436, -0.91],
      end: [position, 0.436, -1.17],
    });
    traces.push({
      key: `z+${index}`,
      start: [position * 0.64, 0.436, 0.77],
      middle: [position * 0.84, 0.436, 0.91],
      end: [position, 0.436, 1.17],
    });
    traces.push({
      key: `x-${index}`,
      start: [-0.77, 0.436, position * 0.64],
      middle: [-0.91, 0.436, position * 0.84],
      end: [-1.17, 0.436, position],
    });
    traces.push({
      key: `x+${index}`,
      start: [0.77, 0.436, position * 0.64],
      middle: [0.91, 0.436, position * 0.84],
      end: [1.17, 0.436, position],
    });
  }

  return { pins, traces };
}

const CHIP_PARTS = createChipParts();
const NODE_POSITIONS = Array.from({ length: 16 }, (_, index) => ({
  row: Math.floor(index / 4),
  position: [((index % 4) - 1.5) * 0.3, 0.68, (1.5 - Math.floor(index / 4)) * 0.3],
}));

function ChipScene({
  active,
  darkMode,
  reducedMotion,
  mobile,
  enableMouseTilt,
  targetRotation,
}) {
  const assemblyRef = useRef(null);
  const coreMaterial = useRef(null);
  const pulseMeshes = useRef([]);
  const animationTimeout = useRef(null);
  const { invalidate } = useThree();

  const materials = useMemo(() => ({
    package: new THREE.MeshPhysicalMaterial({
      color: PACKAGE_COLOR,
      metalness: 0.46,
      roughness: 0.3,
      clearcoat: 0.62,
      clearcoatRoughness: 0.24,
    }),
    die: new THREE.MeshStandardMaterial({
      color: '#0755c9',
      metalness: 0.28,
      roughness: 0.24,
      emissive: '#075dff',
      emissiveIntensity: 0.52,
    }),
    pin: new THREE.MeshStandardMaterial({
      color: PIN_COLOR,
      metalness: 0.84,
      roughness: 0.24,
    }),
    pulse: new THREE.MeshBasicMaterial({
      color: TRACE_COLOR,
      toneMapped: false,
    }),
    nodes: Array.from({ length: 4 }, (_, row) => new THREE.MeshStandardMaterial({
      color: '#8cddff',
      metalness: 0.12,
      roughness: 0.22,
      emissive: NODE_COLOR,
      emissiveIntensity: row === 0 ? 2 : 0.7,
    })),
  }), []);

  useEffect(() => () => {
    materials.package.dispose();
    materials.die.dispose();
    materials.pin.dispose();
    materials.pulse.dispose();
    materials.nodes.forEach((material) => material.dispose());
  }, [materials]);

  useEffect(() => {
    if (active) invalidate();
    return () => {
      if (animationTimeout.current !== null) {
        window.clearTimeout(animationTimeout.current);
        animationTimeout.current = null;
      }
    };
  }, [active, invalidate]);

  useFrame((state, delta) => {
    if (!active || reducedMotion) return;

    const time = state.clock.elapsedTime;
    if (coreMaterial.current) {
      coreMaterial.current.emissiveIntensity = 0.48 + (Math.sin(time * CORE_GLOW_SPEED) + 1) * 0.2;
    }

    const activeRow = Math.floor((time % 2.4) / 0.34);
    const rowProgress = (time % 0.34) / 0.34;
    materials.nodes.forEach((material, row) => {
      const isActive = row === activeRow && activeRow < 4;
      const fade = isActive ? Math.sin(rowProgress * Math.PI) : 0;
      material.emissiveIntensity = 0.62 + fade * 1.55;
      material.color.set(isActive ? '#ffffff' : '#8cddff');
    });

    if (assemblyRef.current && enableMouseTilt) {
      assemblyRef.current.rotation.x = THREE.MathUtils.damp(
        assemblyRef.current.rotation.x,
        targetRotation.current.x,
        3.2,
        delta,
      );
      assemblyRef.current.rotation.y = THREE.MathUtils.damp(
        assemblyRef.current.rotation.y,
        targetRotation.current.y,
        3.2,
        delta,
      );
    }

    pulseMeshes.current.forEach((mesh, index) => {
      if (mesh) {
        const { start, middle, end } = CHIP_PARTS.traces[index];
        const phase = (time * 0.52 + index / CHIP_PARTS.traces.length) % 1;
        const firstLeg = phase < 0.5;
        const legProgress = (phase % 0.5) * 2;
        const legStart = firstLeg ? start : middle;
        const legEnd = firstLeg ? middle : end;
        mesh.position.set(
          legStart[0] + (legEnd[0] - legStart[0]) * legProgress,
          legStart[1] + (legEnd[1] - legStart[1]) * legProgress,
          legStart[2] + (legEnd[2] - legStart[2]) * legProgress,
        );
      }
    });

    if (animationTimeout.current === null) {
      animationTimeout.current = window.setTimeout(() => {
        animationTimeout.current = null;
        invalidate();
      }, mobile ? 1000 / 30 : 1000 / 45);
    }
  });

  return (
    <>
      <ambientLight intensity={darkMode ? 0.72 : 0.96} />
      <directionalLight position={[3, 6, 4]} intensity={darkMode ? 2.5 : 2} />
      <pointLight position={[-3, 2, -2]} color={TRACE_COLOR} intensity={darkMode ? 16 : 10} distance={8} />
      {!darkMode && !mobile && (
        <ContactShadows
          position={[0, -0.055, 0]}
          opacity={0.2}
          scale={4.5}
          blur={2.5}
          far={3}
          resolution={256}
          frames={1}
        />
      )}
      <Float
        enabled={active && !reducedMotion}
        speed={reducedMotion ? 0 : 1.1}
        floatIntensity={reducedMotion ? 0 : 0.12}
        rotationIntensity={reducedMotion ? 0 : 0.035}
        floatingRange={[-0.05, 0.05]}
      >
        <group
          ref={assemblyRef}
          rotation={[BASE_TILT.x, BASE_TILT.y, 0]}
          scale={mobile ? CHIP_SCALE * 1.24 : CHIP_SCALE}
        >
          <RoundedBox
            args={[2.42, 0.42, 2.42]}
            radius={0.16}
            smoothness={4}
            position={[0, 0.22, 0]}
            material={materials.package}
            castShadow={!mobile}
            receiveShadow={!mobile}
          />
          <RoundedBox
            args={[1.62, 0.1, 1.62]}
            radius={0.12}
            smoothness={4}
            position={[0, 0.48, 0]}
            material={materials.package}
          />
          <RoundedBox
            args={[1.48, 0.15, 1.48]}
            radius={0.09}
            smoothness={4}
            position={[0, 0.56, 0]}
            material={materials.die}
            castShadow={!mobile}
            ref={(mesh) => {
              if (mesh) coreMaterial.current = mesh.material;
            }}
          />
          {CHIP_PARTS.pins.map(({ key, vertical, foot }) => (
            <group key={key}>
              <RoundedBox
                args={[0.105, 0.18, 0.07]}
                radius={0.024}
                smoothness={mobile ? 2 : 3}
                position={vertical.position}
                rotation={vertical.rotation}
                material={materials.pin}
                castShadow={!mobile}
              />
              <RoundedBox
                args={[0.105, 0.055, 0.24]}
                radius={0.02}
                smoothness={mobile ? 2 : 3}
                position={foot.position}
                rotation={foot.rotation}
                material={materials.pin}
                castShadow={!mobile}
                receiveShadow={!mobile}
              />
            </group>
          ))}
          {CHIP_PARTS.traces.map(({ key, start, middle, end }, index) => (
            <React.Fragment key={key}>
              <Line
                points={[start, middle, end]}
                color={TRACE_COLOR}
                lineWidth={mobile ? 0.7 : 1}
                transparent
                opacity={0.58}
              />
              <mesh
                ref={(mesh) => {
                  pulseMeshes.current[index] = mesh;
                }}
                material={materials.pulse}
                scale={0.025}
              >
                <sphereGeometry args={[1, 8, 8]} />
              </mesh>
            </React.Fragment>
          ))}
          {NODE_POSITIONS.map(({ row, position }, index) => (
            <RoundedBox
              key={`node-${index}`}
              args={[0.16, 0.12, 0.16]}
              radius={0.035}
              smoothness={2}
              position={position}
              material={materials.nodes[row]}
              castShadow={!mobile}
            />
          ))}
        </group>
      </Float>
    </>
  );
}

function ChipAssembly({
  active,
  darkMode,
  reducedMotion,
  mobile,
  enableMouseTilt,
  fallback,
  onReady,
}) {
  const targetRotation = useRef({ ...BASE_TILT });

  const setTilt = (event) => {
    if (!enableMouseTilt || reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    targetRotation.current.x = BASE_TILT.x + y * 0.12;
    targetRotation.current.y = BASE_TILT.y + x * 0.18;
  };

  const resetTilt = () => {
    targetRotation.current.x = BASE_TILT.x;
    targetRotation.current.y = BASE_TILT.y;
  };

  return (
    <div
      className="chip3d-canvas"
      onPointerMove={setTilt}
      onPointerLeave={resetTilt}
      aria-hidden="true"
    >
      <Canvas
        dpr={mobile
          ? Math.min(window.devicePixelRatio || 1, MOBILE_MAX_PIXEL_RATIO)
          : Math.min(window.devicePixelRatio || 1, DESKTOP_MAX_PIXEL_RATIO)}
        frameloop="demand"
        camera={{
          position: mobile ? [2.8, 6.5, 3.8] : [3.1, 7.2, 4.2],
          fov: mobile ? 35 : 37,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          precision: 'highp',
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          onReady?.();
        }}
        fallback={fallback}
      >
        <ChipScene
          active={active}
          darkMode={darkMode}
          reducedMotion={reducedMotion}
          mobile={mobile}
          enableMouseTilt={enableMouseTilt}
          targetRotation={targetRotation}
        />
      </Canvas>
    </div>
  );
}

export default function Chip3D({ fallback, onReady, reducedMotion }) {
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => document.documentElement.dataset.theme === 'dark',
  );
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 700px)').matches);
  const [touchDevice, setTouchDevice] = useState(
    () => window.matchMedia('(pointer: coarse)').matches,
  );
  const rootRef = useRef(null);
  const tabVisible = useRef(!document.hidden);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting && tabVisible.current),
      { threshold: 0.05 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => {
      tabVisible.current = !document.hidden;
      setActive((current) => current && tabVisible.current);
      if (!document.hidden && rootRef.current) {
        const bounds = rootRef.current.getBoundingClientRect();
        if (bounds.bottom > 0 && bounds.top < window.innerHeight) setActive(true);
      }
    };
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    const themeObserver = new MutationObserver(() => {
      setDarkMode(document.documentElement.dataset.theme === 'dark');
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => themeObserver.disconnect();
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 700px)');
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const updateDevice = () => {
      setMobile(mobileQuery.matches);
      setTouchDevice(touchQuery.matches);
    };
    mobileQuery.addEventListener('change', updateDevice);
    touchQuery.addEventListener('change', updateDevice);
    return () => {
      mobileQuery.removeEventListener('change', updateDevice);
      touchQuery.removeEventListener('change', updateDevice);
    };
  }, []);

  return (
    <div className="chip3d-root" ref={rootRef} aria-hidden="true">
      <div className="chip3d-fallback">{fallback}</div>
      <ChipAssembly
        active={active && tabVisible.current}
        darkMode={darkMode}
        reducedMotion={reducedMotion}
        mobile={mobile}
        enableMouseTilt={ENABLE_MOUSE_TILT && !touchDevice}
        fallback={fallback}
        onReady={onReady}
      />
    </div>
  );
}
