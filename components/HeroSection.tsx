"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

// function AnimatedSphere() {
//   return (
//     <Float speed={4} rotationIntensity={1} floatIntensity={2}>
//       <Sphere args={[1, 100, 200]} scale={2.4}>
//         <MeshDistortMaterial
//           color="#8B6EAF"
//           attach="material"
//           distort={0.3}
//           speed={2}
//           roughness={0.2}
//         />
//       </Sphere>
//     </Float>
//   );
// }

export function HeroSection() {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} />
          {/* <AnimatedSphere /> */}
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{" "}
            <span className="text-primary">Kenton Schools Nairobi</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nurturing leaders of tomorrow through excellence in education,
            innovation, and character development.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/enquire-now">
              <Button size="lg" className="text-lg">
                Enquire Now
              </Button>
            </Link>
            <Link href="/our-school/about-us">
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
