import React from "react";
import Icon1 from "../../images/svg-3.svg";
import Icon2 from "../../images/svg-4.svg";
import Icon3 from "../../images/svg-5.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Objectifs</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>La Motivation</ServicesH2>
          <ServicesP>
            Motiver ceux qui souhaitent pratiquer une activité sportive sans
            avoir vraiment le temps de s'investir dans un club, par manque de
            temps, des horaires peu ou pas compatibles avec une activité
            régulière, ou pour des raisons professionnelles…
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>De Bons Partenaires</ServicesH2>
          <ServicesP>
            Trouver des bons partenaires d’entraînement, en nombre suffisant et
            parfois en dernière minute.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Organiser et Trouver des Activités</ServicesH2>
          <ServicesP>
            Trouver des activités, des terrains à proximité, s’assurer de leur
            disponibilité, dans votre quartier, votre entourage ou votre ville …
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
