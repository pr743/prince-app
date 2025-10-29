import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function BestFoodCarousel({ title, items, hideButtons = false }) {
  const carouselRef = useRef(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  
  const updateButtons = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setDisablePrev(scrollLeft <= 0);
    setDisableNext(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.addEventListener("scroll", updateButtons);
    updateButtons();

    return () => carousel.removeEventListener("scroll", updateButtons);
  }, []);

  
  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const itemWidth = carouselRef.current.firstChild.offsetWidth + 10;
    const scrollAmount = itemWidth * 2; 
    carouselRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mt-1 position-relative mb-1">
      <div className="d-flex justify-content-between align-items-center mb-3">
        {title && <h2 className="fw-bold">{title}</h2>}

        {!hideButtons && (
          <div className="d-none d-md-flex">
            <button
              onClick={() => scroll("prev")}
              className="btn btn-outline-dark me-2"
              disabled={disablePrev}
              style={{
                height: "40px",
                width: "40px",
                cursor: disablePrev ? "not-allowed" : "pointer",
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("next")}
              className="btn btn-outline-dark"
              disabled={disableNext}
              style={{
                height: "40px",
                width: "40px",
                cursor: disableNext ? "not-allowed" : "pointer",
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      <div
        ref={carouselRef}
        className="d-flex overflow-auto"
        style={{ gap: "10px", paddingBottom: "8px" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            onClick={() => window.open(item.link, "_blank")}
            style={{
              minWidth: "120px",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <img
              src={item.img}
              alt={`food-${idx}`}
              className="rounded-circle"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                padding: "1px",
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        .d-flex::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default BestFoodCarousel;





