import React from 'react';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Button } from '../ButtonElements';
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
} from './PricingElements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection id="planes">
        <PricingWrapper>
          <PricingHeading>Planes</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Individual</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>por persona / mensual</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Gimnasio</PricingCardFeature>
                  <PricingCardFeature>Sauna</PricingCardFeature>
                  <PricingCardFeature>Clases de Zumba</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Elegir Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Pareja</PricingCardPlan>
                <PricingCardCost>$94.99</PricingCardCost>
                <PricingCardLength>por persona / mensual</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Gimnasio</PricingCardFeature>
                  <PricingCardFeature>Sauna</PricingCardFeature>
                  <PricingCardFeature>Clases de Zumba</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Elegir Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Familiar</PricingCardPlan>
                <PricingCardCost>$89.99</PricingCardCost>
                <PricingCardLength>por persona / mensual</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Gimnasio</PricingCardFeature>
                  <PricingCardFeature>Sauna</PricingCardFeature>
                  <PricingCardFeature>Clases de Zumba</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Elegir Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
