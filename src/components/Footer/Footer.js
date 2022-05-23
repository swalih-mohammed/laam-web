import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterDescription,
  FooterLinkTitleLocality,
} from "./Footer.elements";

import { NavLogoLakaters } from "../Navbar/Navbar.elements";

function Footer() {
  return (
    <div style={{ backgroundColor: "#002240", paddingTop: 25 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: 100, marginBottom: 50 }}>
          <div>
            <FooterLinkTitleLocality style={{ justifyContent: "flex-start" }}>
              Addresss
            </FooterLinkTitleLocality>
            <FooterDescription>
              104, Crescent Heights, Kismathpur,<br></br> Hyderabad, Telengana,
              500030.
            </FooterDescription>
          </div>
        </div>
        <div>
          <FooterLinkTitleLocality style={{ justifyContent: "flex-start" }}>
            CONTACT US
          </FooterLinkTitleLocality>
          <FooterLinkItems
            style={{ justifyContent: "flex-start", color: "#f7f8fa" }}
          >
            <a style={{ color: "#f7f8fa" }} href="tel:+91 7207724191">
              7207724191
            </a>
            <a
              style={{ color: "#f7f8fa" }}
              href="mailto:support@laamacademy.com"
            >
              support@laamacademy.com
            </a>
          </FooterLinkItems>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <SocialIcons>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook color="#ffff" />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram color="#ffff" />
          </SocialIconLink>
          <SocialIconLink
            href={"/"}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube color="#ffff" />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter color="#ffff" />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin color="#ffff" />
          </SocialIconLink>
        </SocialIcons>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: 50,
        }}
      >
        <SocialIconLink
          href="/privacy-policy"
          style={{ marginRight: 10, fontSize: 14, color: "#ffff" }}
        >
          Privacy Policy
        </SocialIconLink>
        <WebsiteRights style={{ color: "#ffff" }}>
          Laam Academy © 2022
        </WebsiteRights>
      </div>
    </div>
  );
}

export default Footer;
