import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Software Engineer",
          "Full-Stack Web Developer",
          "Mobile App Developer (React Native)",
          "MERN Stack Developer",
          "Node.js + React Specialist",
          "WordPress Developer",
          "Backend & API Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
