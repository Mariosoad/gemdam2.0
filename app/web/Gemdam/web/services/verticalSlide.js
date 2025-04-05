"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./verticalSlider.css";

export default function VerticalSlider(props) {
  const dataServices = props.dataServices;
  const dataComponent = props.component
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mounted, setMounted] = useState(false); // 👈 Nuevo estado

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 👈 Evita render en SSR

  const handleDragEnd = (_event, info) => {
    const offset = info.offset.y;
    const threshold = 80;

    if (offset < -threshold && index < dataServices.description.length - 1) {
      setDirection(1);
      setIndex(index + 1);
    } else if (offset > threshold && index > 0) {
      setDirection(-1);
      setIndex(index - 1);
    }
  };

  const variants = {
    enter: (dir) => ({
      y: dir > 0 ? "50%" : "-50%",
      opacity: 0,
    }),
    center: { y: "0%", opacity: 1 },
    exit: (dir) => ({
      y: dir > 0 ? "-50%" : "50%",
      opacity: 0,
    }),
  };

  const currentItem = dataServices.description[index];
  
  const handleClickScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="slider-container" 
      style={{height:  `${dataComponent === 'bussines' ? '140px' : '400px'}`, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          className="service_item"
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.2 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
        >
          {dataComponent === 'bussines' ? 
                            <div key={index} className='description'>
                                <div>
                                    <p style={{marginLeft: '-5px'}} className='number'>{currentItem?.number}</p>
                                    <div className='sep-line-short'></div>
                                    <h4 className='tittle-description'>{currentItem.title}</h4>
                                    <p style={{marginLeft: '-5px'}} className='text-description'>{currentItem.text}</p>
                                </div>
                            </div> :
          <div className="description service_item">
            <div style={{ width: "100%" }}>
              <p className="number">{currentItem.number}</p>
              <div className="sep-line-short"></div>
              <h4 className="tittle-description">{currentItem.title}</h4>
              <div className="text-description services_dot">
                {currentItem.text.split("\n").map((line, j) => (
                  <div className="child_service_dot" key={j}>
                    <li className="dot_square"></li>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="service_link"
              onClick={() => handleClickScroll("contact")}
            >
              {dataServices.link}
            </button>
          </div>

            

          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
