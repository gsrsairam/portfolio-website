import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 flex justify-center items-center">
      <div className="flex space-x-6">
        <a href="https://linkedin.com/in/sairam-gurram" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
          <FaLinkedinIn className="text-2xl" />
        </a>
        <a href="https://github.com/sairamgurram" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub className="text-2xl" />
        </a>
        <a href="mailto:sairamgu@buffalo.edu" className="hover:text-red-300">
          <FaEnvelope className="text-2xl" />
        </a>
        <a href="https://linktr.ee/sairamgu" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
        <SiLinktree className="text-2xl" />
        </a>
      </div>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <p className="text-center text-sm mt-2 link">
        Adopted <a href="https://github.com/ByteGrad/portfolio-website/tree/master" className="link text-blue">ByteGrad</a>
      </p>
    </footer>
  );
}
