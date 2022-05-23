import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { AiOutlineLaptop, AiOutlineMobile } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Web Applications Packages</PricingHeading>
          <PricingContainer>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineLaptop />
                </PricingCardIcon>
                <PricingCardPlan>Static Website</PricingCardPlan>
                <PricingCardCost>Rs: 5000</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>5 Pages</PricingCardFeature>
                  <PricingCardFeature>Custom Domain</PricingCardFeature>
                  <PricingCardFeature>Progressive Design</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineMobile />
                </PricingCardIcon>
                <PricingCardPlan>Web App</PricingCardPlan>
                <PricingCardCost>Rs: 15,000</PricingCardCost>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>10 functions</PricingCardFeature>
                  <PricingCardFeature>Mobile downloadable</PricingCardFeature>
                  <PricingCardFeature>Progressive design</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineMobile />
                </PricingCardIcon>
                <PricingCardPlan>PWA </PricingCardPlan>
                <PricingCardCost>Rs: 25,000</PricingCardCost>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Mobile downloadable</PricingCardFeature>
                  <PricingCardFeature>Robost Python Backend</PricingCardFeature>
                  <PricingCardFeature>Fast react Frond end</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
