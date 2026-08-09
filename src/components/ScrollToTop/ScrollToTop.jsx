import React from "react";
import { useEffect, useState } from "react";
import "./scroll.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [backToTopButtom, setBackTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackTopButton(true);
      } else {
        setBackTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backToTopButtom && (
        <button
          className="scroll-up"
          type="button"
          onClick={scrollUp}
          aria-label="Back to top"
          title="Back to top"
        >
          <AiOutlineArrowUp aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
