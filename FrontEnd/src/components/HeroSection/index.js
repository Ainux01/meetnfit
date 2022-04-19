import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

import Video from "../../videos/video.mp4";
import { Button } from "../Button";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay muted loop src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <span
            style={{ color: "#ff9800", fontFamily: "Sora", fontSize: "55px" }}
          >
            T
          </span>
          ous vos sports, dans une seule app{" "}
          <span
            style={{ color: "#44aa95", fontFamily: "Sora", fontSize: "55px" }}
          >
            .
          </span>
        </HeroH1>
        <HeroP>
          MeetAndFit, l'application purement sportive dédiée aux rencontres
          sportives. Connectez- vous et trouvez en quelques clics des
          partenaires, des terrains, des activités, et organisez votre première
          activité !
        </HeroP>
        <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
            Commencer {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
