/** @jsxImportSource theme-ui */
import getLocale from "../Locales/getLocale";

export default function Footer() {
  return (
    <footer sx={{ backgroundColor: "darkblue", width: "85%", mx: "auto", my: "20px", padding: "10px", borderRadius: "15px", color: "white" }}>
      <p className="created" sx={{ mx: "auto", my: "5px" }}>{getLocale("footerCreated")}{" "}
        <a href="https://sklinkusch.vercel.app" target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: "blue", color: "antiquewhite", textDecoration: "none", '&:hover': { opacity: 0.6, textDecoration: "none" }}}>
          Stefan Klinkusch
        </a>
      </p>
      <p className="background" sx={{ mx: "auto", my: "5px" }}>
        {getLocale("footerBgImage")}{" "}
        <a
          href="https://unsplash.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ backgroundColor: "blue", color: "antiquewhite", textDecoration: "none", '&:hover': { opacity: 0.6, textDecoration: "none" }}}
        >
          Unsplash.com
        </a>
      </p>
      <p className="data" sx={{ mx: "auto", my: "5px" }}>
        {getLocale("footerData")}{" "}
        <a href="https://www.vbb.de" target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: "blue", color: "antiquewhite", textDecoration: "none", '&:hover': { opacity: 0.6, textDecoration: "none" }}}>
          VBB
        </a>{" "}
        via{" "}
        <a
          href="https://github.com/derhuerst/vbb-hafas"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ backgroundColor: "blue", color: "antiquewhite", textDecoration: "none", '&:hover': { opacity: 0.6, textDecoration: "none" }}}
        >
          VBB-Hafas
        </a>{" "}
      </p>
    </footer>
  );
}
