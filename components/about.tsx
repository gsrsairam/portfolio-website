"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello! I'm <span className="font-medium">Sairam Gurram</span>, a Master’s student at <span className="font-medium">SUNY Buffalo</span> specializing in computer science. My journey from mechanical engineering to software engineering was driven by my passion for problem-solving and technology innovation. I have successfully led projects in backend development, API integration, and scalable solutions at companies like I-PAC and Vellichor Media.
      </p>
      <p>
        My technical expertise encompasses <span className="font-medium">React, Node.js, Python, and cloud technologies</span>. I am particularly interested in developing systems that improve user engagement and data management. I am actively seeking a <span className="font-medium">full-time position</span> where I can contribute to challenging projects and advance my skills in software development.
      </p>
      <p>
        Beyond coding, I'm passionate about <span className="italic">teaching and mentoring</span>. I enjoy breaking down complex problems and helping others learn and grow in the field of technology. In my free time, I explore <span className="font-medium">AI applications</span> and stay active by hiking and cycling. I’m also a lifelong learner, currently diving deeper into <span className="font-medium">data science and machine learning</span>.
      </p>
    </motion.section>
  );
}
