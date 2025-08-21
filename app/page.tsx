"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";

export function Home() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-b from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                <span>Launching Soon</span>
                <br />
                <Image
                    src={"/jett-ui-logo-dark.svg"}
                    alt="Jett-UI Logo"
                    width={0}
                    height={0}
                    className="size-[70%] mx-auto"
                />
            </motion.h1>
        </LampContainer>
    );
}

export default Home