import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaLocationArrow } from "react-icons/fa";
import CategoryBanners from "./CategoryBanners";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [locationOptions, setLocationOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  
  const openSwiggySearch = (query = "") => {
    const url = `https://www.swiggy.com/search${
      query ? `?query=${encodeURIComponent(query)}` : ""
    }`;
    window.open(url, "_blank");
  };

  
  const fetchLocationSuggestions = async (query) => {
    if (!query) return setLocationOptions([]);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setLocationOptions(
        Array.isArray(data)
          ? data.map((item) => ({ name: item.display_name || item.name }))
          : []
      );
      setDropdownOpen(true);
    } catch (err) {
      console.error("Location fetch error:", err);
    }
  };

 
  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation)
      return setErrorMessage("Geolocation not supported.");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setLocation(
            data.display_name ||
              `Lat: ${latitude.toFixed(3)}, Lon: ${longitude.toFixed(3)}`
          );
          setDropdownOpen(false);
          setErrorMessage("");
        } catch {
          setLocation(
            `Lat: ${latitude.toFixed(3)}, Lon: ${longitude.toFixed(3)}`
          );
          setDropdownOpen(false);
        }
      },
      (err) => {
        setErrorMessage(
          err.code === 1
            ? "Location access blocked."
            : "Unable to retrieve location."
        );
        setDropdownOpen(false);
      }
    );
  };

  return (
    <section className="hero-section">
      
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        alt="food left"
        className="bg-left"
      />
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        alt="food right"
        className="bg-right"
      />

      
      <div className="hero-content">
        <h1>
          Order food. Shop <br />
          groceries. Swiggy it!
        </h1>

       
        <div className="hero-inputs">
         
          <div style={{ position: "relative", flex: 1, minWidth: "250px" }}>
            <input
              type="text"
              placeholder="Enter your delivery location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                fetchLocationSuggestions(e.target.value);
              }}
              onFocus={() => setDropdownOpen(true)}
            />
            <FaMapMarkerAlt
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "rgb(255,82,0)",
              }}
            />
            <FaLocationArrow
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "rgb(255,82,0)",
              }}
              onClick={handleUseCurrentLocation}
            />
            {dropdownOpen && locationOptions.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "48px",
                  left: 0,
                  background: "#fff",
                  color: "#000",
                  width: "100%",
                  borderRadius: "8px",
                  maxHeight: "150px",
                  overflowY: "auto",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                  zIndex: 5,
                }}
              >
                {locationOptions.map((opt, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "10px",
                      cursor: "pointer",
                      borderBottom: "1px solid #eee",
                      fontSize: "14px",
                    }}
                    onClick={() => {
                      setLocation(opt.name);
                      setDropdownOpen(false);
                    }}
                  >
                    {opt.name}
                  </div>
                ))}
              </div>
            )}
          </div>

         
          <div style={{ display: "flex", flex: 1, minWidth: "250px" }}>
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && openSwiggySearch(searchQuery)
              }
            />
            <button
              onClick={() => openSwiggySearch(searchQuery)}
              style={{
                background: "#fff",
                border: "none",
                padding: "0 15px",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                cursor: "pointer",
              }}
            >
              <FaSearch style={{ color: "rgb(255,82,0)" }} />
            </button>
          </div>
        </div>

      
        {errorMessage && (
          <p style={{ color: "yellow", marginTop: "10px", fontSize: "14px" }}>
            {errorMessage}
          </p>
        )}

       
        <div className="hero-category">
          <CategoryBanners />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
