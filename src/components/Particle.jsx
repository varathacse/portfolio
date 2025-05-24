import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500,

            },
          },
          line_linked: {
            enable: false,
            opacity: 0.8,
          },
          move: {
            enable: true,
            speed: { min: 0.1, max: 0.5 },
            outModes: {
              default: "bounce",
            },
          },
          size: {
            value: { min: 1.5, max: 2.5 },
          },
          shape: {
            type: "star",
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },

            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 30,
              duration: 0.2,
            },
          },
        },

        retina_detect: true,
      }}
    />
  );
}

export default Particle;
