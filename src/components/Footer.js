import React from "react";
import "../styles/Footer.scss";
import getLocale from "./getLocale";

export default function Footer() {
  return (
    <footer>
      <p className="created">{getLocale("footerCreated")} <a href="https://sklinkusch.vercel.app" target="_blank" rel="noopener noreferrer">Stefan Klinkusch</a></p>
      <p className="background">
        {getLocale("footerBgImage")}{" "}
        <a
          href="https://unsplash.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash.com
        </a>
      </p>
      <p className="data">
        {getLocale("footerData")}{" "}
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
