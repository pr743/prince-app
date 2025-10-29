import React from "react";

const categories = [
  {
    title: "Food",
    link: "https://www.swiggy.com/restaurants",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png",
  },
  {
    title: "Instant Meals",
    link: "https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png",
  },
];

function CategoryBanners() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        overflowX: "auto",
        padding: "10px 0",
        marginTop: "40px",
      }}
    >
      {categories.map((cat, idx) => (
        <a
          key={idx}
          href={cat.link}
          target="_blank"
          rel="noopener noreferrer"
          title={cat.title}
        >
          <img
            src={cat.img}
            alt={cat.title}
            style={{
              height: "230px",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            
          />
        </a>
      ))}
    </div>
  );
}

export default CategoryBanners;






