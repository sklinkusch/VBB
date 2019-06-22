import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <p className="created">created by Stefan Klinkusch</p>
      <p className="background">
        background image from{" "}
        <a
          href="https://unsplash.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash.com
        </a>
      </p>
      <p className="data">
        data from{" "}
        <a href="https://www.vbb.de" target="_blank" rel="noopener noreferrer">
          VBB
        </a>{" "}
        via{" "}
        <a
          href="https://github.com/derhuerst/vbb-hafas"
          target="_blank"
          rel="noopener noreferrer"
        >
          VBB-Hafas
        </a>{" "}
      </p>
    </footer>
  );
}
