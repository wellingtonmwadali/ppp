"use client";

import { useEffect, useRef } from "react";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let animId: number;
    let cleanupFn: (() => void) | undefined;

    const init = async () => {
      const THREE = await import("three");
      const mount = mountRef.current;
      if (!mount) return;

      // ── Scene ──────────────────────────────────────────────────────────────
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.z = 7;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      // ── Particle Field ─────────────────────────────────────────────────────
      const pCount = 2000;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i++) {
        pPos[i] = (Math.random() - 0.5) * 30;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      scene.add(
        new THREE.Points(
          pGeo,
          new THREE.PointsMaterial({ color: 0xffffff, size: 0.035, transparent: true, opacity: 0.28 })
        )
      );

      // ── Geometry Group (parallax target) ────────────────────────────────
      const group = new THREE.Group();
      scene.add(group);

      // Large Icosahedron — top right
      const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.7, 1),
        new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true, transparent: true, opacity: 0.22 })
      );
      ico.position.set(3.2, 1.2, -2);
      group.add(ico);

      // Torus Knot — left
      const torusKnot = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.15, 0.33, 80, 12),
        new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.16 })
      );
      torusKnot.position.set(-3.8, -0.6, -1.5);
      group.add(torusKnot);

      // Octahedron — bottom right
      const oct = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.95, 0),
        new THREE.MeshBasicMaterial({ color: 0xa78bfa, wireframe: true, transparent: true, opacity: 0.3 })
      );
      oct.position.set(1.5, -3.2, 0.5);
      group.add(oct);

      // Dodecahedron — top left
      const dodec = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.65, 0),
        new THREE.MeshBasicMaterial({ color: 0x818cf8, wireframe: true, transparent: true, opacity: 0.25 })
      );
      dodec.position.set(-2, 2.6, 0);
      group.add(dodec);

      // Small sphere accent — mid right
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.35 })
      );
      sphere.position.set(2.5, -1.5, 1);
      group.add(sphere);

      // ── Background Rings ──────────────────────────────────────────────────
      const ring1 = new THREE.Mesh(
        new THREE.TorusGeometry(3.8, 0.013, 8, 100),
        new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.1 })
      );
      ring1.rotation.set(Math.PI / 4, 0, 0);
      ring1.position.set(0, 0, -5);
      scene.add(ring1);

      const ring2 = new THREE.Mesh(
        new THREE.TorusGeometry(2.5, 0.01, 8, 100),
        new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.08 })
      );
      ring2.rotation.set(Math.PI / 2.5, Math.PI / 6, 0);
      ring2.position.set(1, -1, -4);
      scene.add(ring2);

      const ring3 = new THREE.Mesh(
        new THREE.TorusGeometry(5, 0.008, 8, 100),
        new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.06 })
      );
      ring3.rotation.set(Math.PI / 3, Math.PI / 4, 0);
      ring3.position.set(-1, 0.5, -6);
      scene.add(ring3);

      // ── Mouse Parallax ────────────────────────────────────────────────────
      let mx = 0;
      let my = 0;
      const onMouseMove = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouseMove);

      // ── Resize ────────────────────────────────────────────────────────────
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // ── Animation Loop ────────────────────────────────────────────────────
      const clock = new THREE.Clock();
      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        ico.rotation.x = t * 0.1;
        ico.rotation.y = t * 0.07;

        torusKnot.rotation.x = t * 0.06;
        torusKnot.rotation.y = t * 0.12;

        oct.rotation.x = t * 0.18;
        oct.rotation.z = t * 0.12;

        dodec.rotation.y = t * 0.14;
        dodec.rotation.z = t * 0.08;

        sphere.rotation.y = t * 0.22;

        ring1.rotation.z = t * 0.04;
        ring2.rotation.z = -t * 0.03;
        ring3.rotation.y = t * 0.02;

        // Smooth mouse parallax
        group.rotation.y += (mx * 0.12 - group.rotation.y) * 0.05;
        group.rotation.x += (-my * 0.08 - group.rotation.x) * 0.05;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    };

    init().then((fn) => {
      cleanupFn = fn;
    });

    return () => {
      cleanupFn?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
