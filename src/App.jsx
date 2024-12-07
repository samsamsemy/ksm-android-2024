import React from "react";
import "./index.css";
import profil from "./assets/samuel.png";

const App = () => {
  return (
    <div className="_bento-container_">
      {/* Block 1 - Nama dan Deskripsi */}
      <div className="_bento-item_ _large_">
        <h1>Samuel Alexander Mozes Tambunan</h1>
        <p>
          A passionate undergraduate student specializing in UI/UX design with a
          focus on creating intuitive and accessible digital experiences.
          Skilled in modern design tools and delivering user-centered solutions.
        </p>
      </div>

      {/* Foto Profil */}
      <div className="_bento-item_ _medium_">
        <img src={profil} alt="Samuel Alexander Mozes Tambunan" />
      </div>

      {/* Link */}
      <div className="_bento-item_ _small_">
        <h3>Social Links</h3>
        <ul>
          <li>
            <a
              href="https://github.com/samsamsemy"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/samsamsemy/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/samsamsemy/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* link page 2 */}
      <div className="_bento-item_ _small_">
        <h3>My portofolio</h3>
        <button className="_btn_">View</button>
      </div>
      {/* Projects */}
      <div className="_bento-item_ _medium_">
        <h3>Projects</h3>
        <p>
          A collection of design and development projects, ranging from
          minimalist UI designs to interactive prototypes.
        </p>
      </div>

      {/* Skills */}
      <div className="_bento-item_ _medium_">
        <h3>Skills</h3>
        <ul>
          <li>UI/UX Design</li>
          <li>Wireframing & Prototyping</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
