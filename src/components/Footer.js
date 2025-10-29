import React from "react";


const FooterSection = ({ title, links, children }) => (
  <div>
    <h4 style={headingStyle}>{title}</h4>
    <ul style={listStyle}>
      {links.map(([text, url], i) => (
        <li key={i}>
          <a href={url} style={linkStyle}>
            {text}
          </a>
        </li>
      ))}
    </ul>
    {children}
  </div>
);

const SocialIcon = ({ src, href }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <img src={src} alt="social" style={{ height: "24px" }} />
  </a>
);

const headingStyle = {
  fontWeight: "600",
  marginBottom: "15px",
  color: "#3d4152",
  fontSize: "16px",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  lineHeight: "28px",
};

const linkStyle = {
  color: "#333",
  textDecoration: "none",
  fontSize: "14px",
};


const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "whitesmoke",
        color: "#333",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
        }}
      >
        <div>
          <img
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="Swiggy Logo"
            style={{ height: "40px", marginBottom: "15px" }}
          />
          <p style={{ fontSize: "14px", color: "#777" }}>© 2025 Swiggy Limited</p>
        </div>

        <FooterSection title="Company" links={[
          ["About Us", "https://www.swiggy.com/about"],
          ["Swiggy Corporate", "https://www.swiggy.com/corporate"],
          ["Careers", "https://careers.swiggy.com/#/"],
          ["Team", "https://careers.swiggy.com/#/"],
          ["Swiggy One", "https://www.swiggy.com/swiggy-super"],
          ["Swiggy Instamart", "https://www.swiggy.com/instamart"],
          ["Swiggy Dineout", "https://www.swiggy.com/dineout"],
          ["Minis", "https://mini.store/lander?oref=https%3A%2F%2Fwww.swiggy.com%2F"],
          ["Pyng", "https://pyng.co.in/"],
        ]} />

        <div>
          <FooterSection title="Contact us" links={[
            ["Help & Support", "https://www.swiggy.com/support"],
            ["Partner with us", "https://partner.swiggy.com/login#/swiggy"],
            ["Ride with us", "https://ride.swiggy.com/"],
          ]} />
          <FooterSection title="Legal" links={[
            ["Terms & Conditions", "https://www.swiggy.com/terms-and-conditions"],
            ["Cookie Policy", "https://www.swiggy.com/cookie-policy"],
            ["Privacy Policy", "https://www.swiggy.com/privacy-policy"],
          ]} />
        </div>

        <FooterSection title="Available in:" links={[
          ["Bangalore", "https://www.swiggy.com/city/bangalore"],
          ["Gurgaon", "https://www.swiggy.com/city/gurgaon"],
          ["Hyderabad", "https://www.swiggy.com/city/hyderabad"],
          ["Delhi", "https://www.swiggy.com/city/delhi"],
          ["Mumbai", "https://www.swiggy.com/city/mumbai"],
          ["Pune", "https://www.swiggy.com/city/pune"],
        ]}>
          <p style={{ fontSize: "13px", color: "#777", marginTop: "10px" }}>+685 cities</p>
        </FooterSection>

        <div>
          <FooterSection title="Life at Swiggy" links={[
            ["Explore with Swiggy", "https://blog.swiggy.com/"],
            ["Swiggy News", "https://blog.swiggy.com/category/swiggy-restaurant-awards/"],
            ["Snackables", "https://blog.swiggy.com/category/snackables/campaigns/"],
          ]} />
          <h4 style={headingStyle}>Social Links</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <SocialIcon src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg" href="https://www.linkedin.com/company/swiggy-in/" />
            <SocialIcon src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg" href="https://www.instagram.com/swiggyindia/" />
            <SocialIcon src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg" href="https://www.facebook.com/swiggy.in/" />
            <SocialIcon src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg" href="https://in.pinterest.com/swiggyindia/" />
            <SocialIcon src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg" href="https://x.com/Swiggy" />
          </div>
        </div>
      </div>

      <hr style={{ margin: "40px 0", borderColor: "#ddd" }} />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "15px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h4 style={headingStyle}>For better experience, download the Swiggy App</h4>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank" rel="noreferrer">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Google Play" style={{ height: "50px" }} />
        </a>
        <a href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920" target="_blank" rel="noreferrer">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App Store" style={{ height: "50px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


