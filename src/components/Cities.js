import React, { useState } from "react";

const city   = [

        {
         name:"Bangalore",
         link:"https://www.swiggy.com/instamart/city/bangalore"   
        },

        {
          name :"Gurgaon",
          link:"https://www.swiggy.com/instamart/city/gurgaon"  
        },

        {
          name :"Hyderabad",
          link:"-https://www.swiggy.com/instamart/city/hyderabad"  
        },
        {
          name :"Delhi",
          link:"https://www.swiggy.com/instamart/city/delhi"  
        },
        {
          name :"Mumbai",
          link:"https://www.swiggy.com/instamart/city/mumbai"  
        },
        {
          name :"Pune",
          link:"https://www.swiggy.com/instamart/city/pune"  
        },
        {
          name :"Kolkata",
          link:"https://www.swiggy.com/instamart/city/kolkata"  
        },
        {
          name :"Chennai",
          link:"https://www.swiggy.com/instamart/city/chennai"  
        },
        {
          name :"Ahmedabad",
          link:"https://www.swiggy.com/instamart/city/ahmedabad"  
        },
        {
          name :"Chandigarh",
          link:"https://www.swiggy.com/instamart/city/chandigarh"  
        },
        {
          name :"Jaipur",
          link:"https://www.swiggy.com/instamart/city/jaipur"  
        },
        {
          name :"Kochi",
          link:"https://www.swiggy.com/instamart/city/kochi"  
        },
        {
          name :"Coimbatore",
          link:"https://www.swiggy.com/instamart/city/coimbatore"  
        },
        {
          name :"Lucknow",
          link:"https://www.swiggy.com/instamart/city/lucknow"  
        },
        {
          name :"Nagpur",
          link:"https://www.swiggy.com/instamart/city/nagpur"  
        },
        {
          name :"Vadodara",
          link:"https://www.swiggy.com/instamart/city/vadodara"  
        },
        {
          name :"Indore",
          link:"https://www.swiggy.com/instamart/city/indore"  
        },
        {
          name :"Vizag",
          link:"https://www.swiggy.com/instamart/city/vizag"  
        },
        {
          name :"Surat",
          link:"https://www.swiggy.com/instamart/city/surat"  
        },
        {
          name :"Dehradun",
          link:"https://www.swiggy.com/instamart/city/dehradun"  
        },
        {
          name :"Noida",
          link:"https://www.swiggy.com/instamart/city/noida"  
        },
        {
          name :"Vijayawada",
          link:"https://www.swiggy.com/instamart/city/vijayawada"  
        },
        {
          name :"Mysore",
          link:"https://www.swiggy.com/instamart/city/mysore"  
        },
        {
          name :"Nashik",
          link:"https://www.swiggy.com/instamart/city/nashik"  
        },
        {
          name :"Pondicherry",
          link:"https://www.swiggy.com/instamart/city/pondicherry"  
        },
        {
          name :"Bhubaneswar",
          link:"https://www.swiggy.com/instamart/city/bhubaneswar"  
        },
        {
          name :"Central Goa",
          link:"https://www.swiggy.com/instamart/city/central-goa"  
        },
        {
          name :"Thiruvananthapuram",
          link:"https://www.swiggy.com/instamart/city/thiruvananthapuram"  
        },
        {
          name :"Mangaluru",
          link:"https://www.swiggy.com/instamart/city/mangaluru"  
        },
        {
          name :"Faridabad",
          link:"https://www.swiggy.com/instamart/city/faridabad"  
        },
        {
          name :"Guntur",
          link:"https://www.swiggy.com/instamart/city/guntur"  
        },
          
    ];

const Cities = () => {

    const [showAll, setShowAll] = useState(false);
  const limit = 11; 
  const visibleCity = showAll ? city : city.slice(0, limit);

  return (
    <div style={{padding: "40px 100px",marginLeft:"50px"}}>
    <h2 style={{ fontSize:"28px", fontWeight:"700"}}>
        Cities with grocery delivery
    </h2>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "15px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {visibleCity.map((city, index) => (
          <a
            key={index}
            href={city.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "15px 18px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
              color: "#535665",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "500",
              textAlign: "center",
              transition: "all 0.3s ease",
              border: "1px solid #e2e2e2",
            }}
            >
                Order grocery delivery in <br /> {city.name}
            </a>
            ))}

        {!showAll && city.length > limit && (
          <button
            onClick={() => setShowAll(true)}
            style={{
              padding: "15px 18px",
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
              color: "#fc8019",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              border: "1px solid #e2e2e2",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            >
            Show More ▼
          </button>
        )}

      </div>
    </div>
  );
};

export default Cities
