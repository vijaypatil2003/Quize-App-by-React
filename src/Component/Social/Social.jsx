import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Social.css";

export default function Social() {
  return (
    <div className="social-container">
      <a
        href="https://github.com/vijaypatil2003"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon github" />
      </a>
      <a
        href="https://www.linkedin.com/in/vijaypatil0106/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon linkedin" />
      </a>
      <p>Made by Vijay patil</p>

    </div>
  );
}
