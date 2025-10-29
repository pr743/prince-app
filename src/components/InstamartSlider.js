import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function InstamartSlider({title,hideButtons = false }) {
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

const items = [
    {
      name: "Fresh \n Vegetables",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a",
      link: "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh+Vegetables&custom_back=true",
    },
    {
      name: "Fresh Fruits",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/a1493d81-f21e-415f-9875-f78383590fc2_9f3f0f68-4fbe-40f6-8f5d-5472a03469bd",
      link: "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh+Fruits&custom_back=true",
    },
    {
      name: "Dairy, Bread\n and  Eggs",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/6dea6676-ce07-45e6-b60c-a099c01c5462_6d33297a-5828-48ff-aa2a-c052ae97669e",
      link: "https://www.swiggy.com/instamart/category-listing?categoryName=Dairy%2C+Bread+and+Eggs&custom_back=true",
    },
    {
      name: "Rice, Atta and \n Dals",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/097900ca-5d2d-4bb0-8e54-aede1e58dfd8_eab3796c-ac17-48fd-bfc7-6356c6f89783",
      link: "https://www.swiggy.com/instamart/category-listing?categoryName=Rice%2C+Atta+and+Dals&custom_back=true",
    },
    {
      name: "Masalas and \n Dry Fruits ",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/64714677-e6b6-41c1-b533-6644d43e55f7_76ef86af-0483-41a5-8387-37901bf4ca6a",
      link: "https://www.swiggy.com/instamart/category-listing?categoryName=Masalas+and+Dry+Fruits&custom_back=true"
    },
    {
      name: "Oils and Ghee",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/8e48ee13-3b51-49ea-b765-5cf3e7a97c04_695caa8a-c2f6-4a1a-9672-53213fea21aa",
      link: "https://www.swiggy.com/instamart/category-listing?categoryName=Oils+and+Ghee&custom_back=true",
    },

    {
      name:"Munchies",
      images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/73e018a7-d342-475e-aaca-ec5cd3d0c59f_228ff3d4-ff21-44db-9768-7a369c65ce6a",
      link:"https://www.swiggy.com/instamart/category-listing?categoryName=Munchies&custom_back=true",

    },

        {
    name :"Sweet Tooth",
    images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/83a9b71b-1db7-4cbe-a9f7-ead650d26326_3afbe8c8-f5c8-4dd7-8357-f5711f80646b",
    link:"https://www.swiggy.com/instamart/category-listing?categoryName=Sweet+Tooth&custom_back=true"    
    },
    {
    name :"Cold Drinks \n and Juices",
    images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/37d399b1-52d2-47ef-bdd8-8951e51819fc_0361a93d-e864-49be-a57d-46c958eb7b56" ,
    link:"https://www.swiggy.com/instamart/category-listing?categoryName=Cold+Drinks+and+Juices&custom_back=true"
    },

    {
    name :"Biscuits and \n  Cakes",
    images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/76a7104c-0f11-4182-aa51-0d48efc2be7f_aae098f9-aaff-4504-a222-bf13595d58cd",
    link:"https://www.swiggy.com/instamart/category-listing?categoryName=Biscuits+and+Cakes&custom_back=true",   
    },

        {
      name :"Instant and \n Frozen Food",
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/1a08f110-17b6-4785-92d4-404825b75f2d_869c1986-d9c1-4d46-b1c3-10c79a052a59",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Instant+and+Frozen+Food&custom_back=true"    
    },

       
      {
    name :"Meat and \n Seafood",
    images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/25be4b2d-a9de-495e-a9a4-9a6d6a3d13c0_5f571281-eef0-4820-9982-d8bdd9af91c6",
    link:"https://www.swiggy.com/instamart/category-listing?categoryName=Meat+and+Seafood&custom_back=true",   
    },
    {
     name:"Cereals and \n Breakfast",
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/012beae1-c31a-4360-9b32-173080b64652_aa07a04e-5f2e-4c00-86f6-297344906f01 ",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Cereals+and+Breakfast&custom_back=true"
    },

    {
      name:"Sauces and \n Spreads",
      images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/e2f96940-2657-4a4b-a5e1-0c3413ba25cb_8b977351-a415-442a-bb9c-320e1642f740",
      link:"https://www.swiggy.com/instamart/category-listing?categoryName=Sauces+and+Spreads&custom_back=true"
    },
    {
     name :"Tea, Coffee and \n More",
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/5fc3d15a-26b0-41e0-93ab-39ada0f553c2_82e0ff9f-558c-45dd-af3e-fdc16d0aa471",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Tea%2C+Coffee+and+More&custom_back=true"    

    },  

        {
     name :"Cleaning \n Essentials" ,
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/73a47bc4-c684-447f-9908-22da3ecd3ba2_c9948a61-3dca-4e29-82b4-31178d38746b",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Cleaning+Essentials&custom_back=true" , 
    },
    {
     name :"Pharma and \n Hygiene",
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/fc74f557-a203-4dba-8955-82d6c608e91e_7d2481f0-8614-400c-b25c-554a655c14c7",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Pharma+and+Hygiene&custom_back=true"

    },
    {
     name:"Bath, Body and \n Hair",
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/4342c814-6ff9-4bbe-a360-95200ad602a0_1905dc17-a04d-4a9e-9a4e-adde9b27f321",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Bath%2C+Body+and+Hair&custom_back=true",  
    },

    {
     name :"Paan Corner",
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/3/25/1eae2df9-95a5-40e5-a2c0-92bb4893637a_5e1e6c72-dde5-4a12-8bdf-c7cbc4b0644b",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Paan+Corner&custom_back=true",
    },
    {
     name:"Home and Kitchen \n" ,
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/657a922d-067a-4e0b-b967-b3e0c7906fa9_485311db-2f22-4193-a05d-963f18a89150",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Home+and+Kitchen&custom_back=true"
    },
    {
     name :"Office and \n Electricals",
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/52a66c89-6516-489f-96ac-b15286900648_ebbfd2d1-9b36-4ce3-b08c-7378f1ca6d7d",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Office+and+Electricals&custom_back=true",
    },
    {
      name:"Baby Care",
      images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/7/6/cbbab04b-845a-44bd-aa63-329276af1714_c6c9dc53-ae50-475a-89d8-b03824c4a98a",
      link:"https://www.swiggy.com/instamart/category-listing?categoryName=Baby+Care&custom_back=true",
    },

      {
     name :"Pet Supplies",
     images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/705173ff-7cd9-4d7e-9e5b-3886d81411b9_bb324827-9556-48e4-b8f6-280706478fe2",
     link:"https://www.swiggy.com/instamart/category-listing?categoryName=Pet+Supplies&custom_back=true", 
    },
    {
      name :"Beauty and \n Grooming",
      images:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/e160e4c4-2114-4e3d-97ff-3922125a3b2e_224bcfa1-77e3-47e5-aea5-1ab060585b4b",
      link:"https://www.swiggy.com/instamart/category-listing?categoryName=Beauty+and+Grooming&custom_back=true"
    },
    
  ];

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
              src={item.img || item.images} 
              alt={`food-${idx}`}
              className="rounded-Square"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                padding: "1px",
              }}
            />

            <p
              className="mt-2 fw-semibold"
              style={{
                fontSize: "16px",
                whiteSpace: "pre-line", 
                lineHeight: "1.2",
              }}
            >
              {item.name}
            </p>
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

export default InstamartSlider;



