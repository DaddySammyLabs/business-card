import "./Hero.css";

import useResize from "@/hooks/Resize";

import HeroMobile from "./hero-mobile/HeroMobile";

import heroimage from "../../assets/images/Sun_moon-pana.png";
import Animation from "../animation/AnimationHoverResponsive";

// import ThemeSwitcher from "../components/theme/ThemeSwitcher";

function Hero({ texts }) {
  const isMobile = useResize();

  return (
    <>
      {!isMobile ? (
        <div className="hero">
          <div className="info-block">
            <h1>
              {texts.hero_title}
              <span className="author">{texts.author}</span>
            </h1>
            <h2>
              {texts.Ido}
              <span className="violet-text">{texts.hero_subtitle_part2} </span>
              {texts.hero_subtitle_part3}
              <br />
              <span className="violet-text">{texts.hero_subtitle_part4}</span>
              <br />
              {texts.hero_subtitle_part5}
            </h2>
            <h3>{texts.hero_info}</h3>
            {/* first-block-info */}
          </div>

          {/* <ImageBox titleImage={hero} number="first" /> */}

          <Animation titleImage={heroimage} number="first" />

          {/* hero-block */}
        </div>
      ) : (
        <HeroMobile texts={texts} />
        // <div className="hero-mobile">
        //   <Animation titleImage={heroimage} number="first" />

        //   <div className="info-block">
        //     <h1>
        //       {texts.hero_title}
        //       <span className="author">{texts.author}</span>
        //     </h1>
        //     <h2>
        //       {texts.Ido}
        //       <span className="violet-text">{texts.hero_subtitle_part2} </span>
        //       {texts.hero_subtitle_part3}
        //       <br />
        //       <span className="violet-text">{texts.hero_subtitle_part4}</span>
        //       <br />
        //       {texts.hero_subtitle_part5}
        //     </h2>
        //     <h3>{texts.hero_info}</h3>
        //   </div>
        // </div>
      )}
    </>
  );
}

export default Hero;
