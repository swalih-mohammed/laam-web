import React from "react";
import styled from "styled-components";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterLinkItems,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterDescription,
  FooterLinkTitleLocality,
} from "./Footer.elements";
import { Subtitle } from "../InfoSection/InfoSection.elements";

const Section = styled.div`
  color: #fff;
  padding: 160px 0;
  padding: 70px 0px;
  background: "#002240";
  /* background-color: "#002240"; */
`;
const TopLine = styled.div`
  color: ${"#4B59F7"};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  margin-bottom: 20;
  flex-wrap: wrap;
  /* align-items: center; */
  /* flex-direction: "row"; */
  /* justify-content: "center"; */
  /* align-items: "center"; */
`;

const Column = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  justify-content: "center";
  align-items: "center";

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#002240",
        paddingBottom: 50,
      }}
    >
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <FooterLinkTitleLocality style={{ justifyContent: "center" }}>
            Addresss
          </FooterLinkTitleLocality>
          <FooterDescription>
            104, Crescent Heights, Kismathpur,<br></br> Hyderabad, Telengana,
            500030.
          </FooterDescription>
        </div>
        <div
          style={{
            marginBottom: 20,
            // justifyContent: "center",
            // alignItems: "flex-start",
            // backgroundColor: "red",
          }}
        >
          <FooterLinkTitleLocality>CONTACT US</FooterLinkTitleLocality>
          <FooterLinkItems style={{ color: "#f7f8fa" }}>
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
          flex: 1,
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <div>
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
      </div>
      <div
        style={{
          flex: 1,
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
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
    </div>
    // <Section style={{ backgroundColor: "#002240" }}>
    //   <Row
    //     style={
    //       {
    //         // backgroundColor: "red",
    //         // justifyContent: "center",
    //         // alignItems: "center",
    //       }
    //     }
    //   >
    //     <Column
    //       style={{
    //         backgroundColor: "red",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         // display: "flex",
    //         alignContent: "center",
    //         alignSelf: "center",
    //       }}
    //     >
    //       <FooterLinkTitleLocality style={{ justifyContent: "flex-start" }}>
    //         Addresss
    //       </FooterLinkTitleLocality>
    //       <FooterDescription>
    //         104, Crescent Heights, Kismathpur,<br></br> Hyderabad, Telengana,
    //         500030.
    //       </FooterDescription>
    //     </Column>
    //     <Column>
    // <FooterLinkTitleLocality style={{ justifyContent: "flex-start" }}>
    //   CONTACT US
    // </FooterLinkTitleLocality>
    // <FooterLinkItems
    //   style={{ justifyContent: "flex-start", color: "#f7f8fa" }}
    // >
    //   <a style={{ color: "#f7f8fa" }} href="tel:+91 7207724191">
    //     7207724191
    //   </a>
    //   <a
    //     style={{ color: "#f7f8fa" }}
    //     href="mailto:support@laamacademy.com"
    //   >
    //     support@laamacademy.com
    //   </a>
    // </FooterLinkItems>
    //     </Column>
    //   </Row>
    //   <Row
    //     style={{
    //       // backgroundColor: "black",
    //       justifyContent: "center",
    //       marginBottom: 20,
    //       // backgroundColor: "red",
    //     }}
    //   >
    // <SocialIcons>
    //   <SocialIconLink href="/" target="_blank" aria-label="Facebook">
    //     <FaFacebook color="#ffff" />
    //   </SocialIconLink>
    //   <SocialIconLink href="/" target="_blank" aria-label="Instagram">
    //     <FaInstagram color="#ffff" />
    //   </SocialIconLink>
    //   <SocialIconLink
    //     href={"/"}
    //     rel="noopener noreferrer"
    //     target="_blank"
    //     aria-label="Youtube"
    //   >
    //     <FaYoutube color="#ffff" />
    //   </SocialIconLink>
    //   <SocialIconLink href="/" target="_blank" aria-label="Twitter">
    //     <FaTwitter color="#ffff" />
    //   </SocialIconLink>
    //   <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
    //     <FaLinkedin color="#ffff" />
    //   </SocialIconLink>
    // </SocialIcons>
    //   </Row>
    //   <Row style={{ marginBottom: 20, justifyContent: "center" }}>
    // <SocialIconLink
    //   href="/privacy-policy"
    //   style={{ marginRight: 10, fontSize: 14, color: "#ffff" }}
    // >
    //   Privacy Policy
    // </SocialIconLink>
    // <WebsiteRights style={{ color: "#ffff" }}>
    //   Laam Academy © 2022
    // </WebsiteRights>
    //   </Row>
    // </Section>
  );
}

export default Footer;
