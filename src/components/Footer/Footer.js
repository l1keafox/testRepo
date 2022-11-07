import React from "react";
import { Instagram, AlternateEmail } from "@mui/icons-material/";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="contactLinks">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/eric_schemmel/"
              target="_blank"
              key="insta"
            >
              <Instagram sx={{ fontSize: "3rem" }} /> Instagram
            </a>
          </li>

          <li>
            <a
              href="mailto:eric.schemmel8@gmail.com"
              target="_blank"
              key="email"
            >
              <AlternateEmail sx={{ fontSize: "3rem" }} /> Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
