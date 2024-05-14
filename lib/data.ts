import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master’s Degree in Computer Science",
    location: "SUNY Buffalo",
    description:
      "Focused on advanced data models and query languages, developed a strong foundation in software engineering principles.",
    icon: React.createElement(BsFillBriefcaseFill),
    date: "2024 - Present",
  },
  {
    title: "Senior Software Engineer at Vellichor Media",
    location: "Bangalore, India",
    description:
      "Managed major projects enhancing user engagement, integrating scalable solutions using React, Node.js, and cloud technologies.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
  {
    title: "Software Engineer at I-PAC",
    location: "Hyderabad, India",
    description:
      "Led backend development and API integration, improving system scalability and performance. Upskilled to full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: " AI-Powered Q/A System for Novel Analysis",
    description:
      `Developed and tested a chatbot component using pre-trained models DialoGPT and BlenderBot, ensuring robust
      performance and user satisfaction. Designed and deployed a user-friendly web interface for the chatbot, complete with
      detailed chat analysis and visualization features using JavaScript and Git.`,
    tags: ["Python", "Transformers", "Chatterbot", "React"]
  },
  {
    title: "Raft Protocol and Chandy Lamport Implementation",
    description: `Designed and implemented the leader election phase of the Raft protocol using Go. Developed the Chandy Lamport snapshot algorithm for unidirectional, FIFO ordered channels,
    enabling efficient and accurate global state capture.`,
    tags: ["GoLang", "Fault Tolerance"]
  },
  {
    title: "Weather Forecast System",
    description:
    `Developed and deployed scalable cloud-native microservices for advanced weather modeling using NEXRAD data, with
    Kafka for communication. Utilized Kubernetes for containerization, Jenkins for CI/CD pipelines, and managed traffic for
    canary deployments, ensuring efficient load balancing and service health.`,
    tags: ["Docker", "Kubernetes", "Kafka", "Cloud"],
  },
  {
    title: "Real-Time Attendance System",
    description:
      "Created a secure, router-bound intranet system for accurate student attendance tracking, using local network validation.",
    tags: ["Network Security", "Intranet", "Data Validation"],
  },
] as const;

export const skillsData = 

[
  "Python",
  "Go",
  "Solidity",
  "Google Cloud Platform",
  "Javascript",
  "Gitlab",
  "MySQL",
  "Express.js",
  "MongoDB",
  "React.js",
  "Node.js",
  "Docker",
  "AWS",
  "Typescript",
  "Mongoose",
  "Swagger",
  "Postman",
  "Plagiarism Detection",
  "Zero GPT",
  "MOSS",
  "Sonarqube",
  "Maven",
  "Spring Boot",
  "Microservices",
  "JFrog Software",
  "Gitlab Pipelines",
  "Harbor",
  "CI/CD",
  "Pandas",
  "Matplotlib",
  "Jupyter",
  "Scikit-Learn",
  "NLTK",
  "Transformers",
  "Flask",
  "Nginx",
  "Angular Material",
  "Angular CLI",
  "Angular",
  "SASS",
  "SCSS",
  "HTML",
  "Cascading Style Sheets (CSS)",
  "REST APIs",  
  "AutoCAD",
  "PTC Creo",
  "Matlab",
  "ANSYS",
  "C",
  "Microsoft PowerPoint"
] as const;