import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import VerticalSlider from "./verticalSlide";
import "./services.css";

export default function Services(props) {
  const dataServices = props.dataText;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 980px)" });

  const handleClickScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="services" className="container-services snapScroll">
      <div className="back-tittle">
        <h2>{dataServices?.title}</h2>
      </div>
      <div className="child-container-services">
        <div className="subtittle-top top-position mark-tittle">
          <div className="sep-line-large"></div>
          <p>{dataServices?.subtitle}</p>
        </div>
        <h2 className="tittle-section">{dataServices?.titleDescription}</h2>
        <div className="child_separate_description"></div>
        <div className="container-description">
          {isClient ? (
            isMobile ? (
              <VerticalSlider dataServices={dataServices} />
            ) : (
              dataServices?.description.map((item, index) => (
                <div key={index} className="description service_item">
                  <div>
                    <p className="number">{item.number}</p>
                    <div className="sep-line-short"></div>
                    <h4 className="tittle-description">{item.title}</h4>
                    <div className="text-description services_dot">
                      {item.text.split("\n").map((line, i) => (
                        <div className="child_service_dot" key={i}>
                          <li className="dot_square"></li>
                          <span>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="child-container-call">
                    <button
                      className="service_link"
                      onClick={() => handleClickScroll("contact")}
                    >
                      <div className="child-call">
                        <div className="text-swap">
                          <div className="cont-text-swap">
                            <p>{dataServices.link}</p>
                            <p>{dataServices.link}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              ))
            )
          ) : null}
        </div>
      </div>

      <div className="lines">
        <div className="line-1"></div>
        <div className="line-1"></div>
        <div className="line-1"></div>
        <div className="line-1"></div>
        <div className="line-1"></div>
      </div>
    </div>
  );
}
