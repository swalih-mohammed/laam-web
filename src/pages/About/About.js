import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import styled from "styled-components";
import { WhatsAppButton } from "../../globalStyles";

const Section = styled.div`
  color: #fff;
  padding: 160px 0;
  padding: 70px 0px;
  background: "#002240";
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
  /* margin: 15px; */
  /* margin: auto 15px; */
  flex-wrap: wrap;
  align-items: center;
  flex-direction: "row";
`;

const Column = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: "flex-end";
`;

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    /* padding-left: 20px; */
    /* padding-right: 20px; */
  }
`;

const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: ${"#1c2237"};
  /* ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")}; */
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${"#1c2237"};
`;

function SectionOne() {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <Column>
              <TextWrapper>
                <TopLine>We take you English to the next level</TopLine>
                <Title> LAAM ACADEMY</Title>
                <Subtitle>
                  Laam Academy helps young people to gain the skills, confidence
                  to realise their potential and to participate in strong and
                  inclusive communities. We support them to learn English, to
                  get a high-quality job.
                </Subtitle>
                <WhatsAppButton />
              </TextWrapper>
            </Column>
            <Column>
              <ImgWrapper>
                <Img src={require("../../images/section_1.png")} alt={""} />
              </ImgWrapper>
            </Column>
          </Row>
        </Container>
      </Section>
    </>
  );
}

export default SectionOne;
