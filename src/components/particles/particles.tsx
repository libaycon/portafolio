'use client';
import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { ClientOnly } from '@/components/next_utils/clent_only';
import snow from "./snow";



function ParticlesComponent(): JSX.Element {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)

    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);

    return (
        <ClientOnly>
            <Particles
                className="-z-10"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={snow}
            />
        </ClientOnly>
    );
}
export default ParticlesComponent;