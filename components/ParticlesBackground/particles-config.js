import React from "react";

const ParticlesConfig = {
  background: {
    color: "transparent",
  },
  style: {
    position: "absolute",
    top: "0",
    left: "0",
    color: "#000",
  },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#333" },
    move: {
      bounce: false,
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, area: 800 }, value: 180 },
    opacity: {
      value: 0.5,
    },
    color: { value: "#333" },
    links: {
      enable: true,
      color: "#333",
    },
    size: {
      value: 1,
    },
  },
};

export default ParticlesConfig;
