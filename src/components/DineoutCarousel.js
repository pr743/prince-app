import React, { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import NavLink from "./NavLink";

export default function DineoutCarousel({ title }) {
  const carouselRef = useRef(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const restaurants = [
    {
      name: "Table Tales - Prahladnagar",
      rating: "4.2",
      type: "North Indian • Continental",
      price: "₹1600 for two",
      location: "Ratnanjali Solitaire, Prahlad Nagar",
      distance: "8.1 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
      offer: "Flat 35% off on pre-booking",  
      bankOffer: "Up to 10% off with bank offers",
      moreOffers: 1,  
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/5/31/933e781a-a5c5-4587-aeb3-73f75d2c00a5_image3660fce5f3037043cdbe490b26b942b68b.JPG",
    },
    {
      name: "Upper Crust",
      rating: "4.4",
      type: "Continental • North Indian",
      price: "₹1000 for two",
      location: "Aarohi Complex, Navrangpura",
      distance: "5 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
      offer: "Flat 10% off on pre-booking",
      moreOffers: 1, 
      bankOffer: "Up to 10% off with bank offers",  
      link:"https://www.swiggy.com/restaurants/50148/dineout",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1662152824/fqijkq7nq4sgiaamclon.jpg",
    },
    {
      name: "Cafe Maangi",
      rating: "4.5",
      type: "Fast Food • Italian",
      price: "₹800 for two",
      location: "Chandan Complex, Navrangpura",
      distance: "3.7 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
      bankOffer: "Up to 10% off with bank offers",
      moreOffers: 1,  
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/18/aca1b6cb-1dc9-4349-987e-32929bb97b70_image5a7c2bc3f14cc473fb0c918e392e922b7.JPG",
    },
    {
      badge: "GIRF SPECIAL",
      name: "Si Nonna's - The Original",
      rating: "4.7",
      type: "Italian • Desserts",
      price: "₹1500 for two",
      location: "Shivalik Shilp, Satellite",
      distance: "9 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
      bankOffer: "10% off with bank offers",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/3/7/a98fa4b3-812e-42c8-9dd9-de3fdc7f2fb3_image41dd4738c9d42b42278e73233a4d7080f5.JPG",
    },
    {
      name: "Naivedyam Flavours of...",
      rating: "4.5",
      type: "South Indian",
      price: "₹200 for two",
      location: "Narnarayan Complex, Navrangpura",
      distance: "7 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
      bankOffer: "Up to 10% off with bank offers", 
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/6/2/10de5024-e173-4950-a464-7368561d74fd_image0454f1bfa83d5459e8cacd036db314b5b.JPG",
    },
    {
      badge: "GIRF SPECIAL",
      name: "From the North...",
      rating: "4.2",
      type: "Continental • North Indian",
      price: "₹600 for two",
      location: "Emerald Building, Navrangpura",
      distance: "3.3 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
      offer: "Flat 20% off on pre-booking",
      moreOffers: 1,  
      bankOffer: "Up to 10% off with bank offers",  
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661638294/w7ordmcjlm2xaaufojgh.jpg",
    },


    {
      name:"Si Nonna's The original",
      rating:"4.7",
      type:"Italian • Beverages",
      price:"₹1500 for two",
      location:"Swagat Holiday Mall, Gandhinagar,.....",
      distance:"9.1 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
      bankOffer: "Up to 10% off with bank offers",
      image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/4/30/b5878b2b-8959-48f4-8a53-b64712c771a6_image4501c3da790fd4ce7884b10fed66dd602.JPG"

    },

    {
      name:"Yanki Sizzlerr",
      rating:"4.4",
      type:"North Indian • Chinese",
      price:"₹1400 for two",
      location:"Navrangpura, Ahmedabad",
      distance:"4.1 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
      bankOffer: "Up to 10% off with bank offers",
       image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1672346049/13c44736c2fcbbc682f518dcf5a6eabd.jpg",
    },

    {
      badge: "GIRF SPECIAL",
     name:"Gunattavam (A Millet Multi..." ,
     rating:"4.6",
     type:"South Indian • Multi Cuisine",
     price:"₹900 for two",
     location:"Paldi, Ahmedabad",
     distance:"3.2 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 15% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/10/3b3a4939-ebf1-4f5c-ab72-399ac02ff4e2_image1006be69a7e35f40018ea066e7e957ddf2.JPG"
    },

    {

     name:"Table Tales - Sindhu Bhavan" ,
     rating:"4.5",
     type:"Continental • North Indian",
     price:"₹1200 for two",
     location:"Paldi, Ahmedabad",
     distance:"10.2 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 10% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/7/5/7f559fec-6368-48a7-8839-c7ba1f62dd8f_140copyc4f8a88fc6bd44b288f2a40a463b5e67.JPG"
    },


    {
     name:"Bellasen Bistro" ,
     rating:"4.2",
     type:"Continental • North Indian",
     price:"₹1000 for two",
     location:"Paldi, Ahmedabad",
     distance:"9.3 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 30% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/3/28/40b02712-a107-4a13-85d2-334578aaa883_FineDineTable15c3fa6923ec4f6b93fc692c4bab648e.JPG"
    },

    {
      badge: "GIRF SPECIAL",
     name:"The Eatery" ,
     rating:"4.2",
     type:"Asian • Continental",
     price:"₹2000 for two",
     location:"Four Points by Sheraton, Ellis Bridge,",
     distance:"2.6 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/bell.png",
        text: "Buffet",
      },
    ],
     offer: "Flat 40% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661891591/unnw4vqva39d4lr50ftb.jpg"
    },
    {
    badge: "GIRF SPECIAL",
     name:"Nomad Pizza" ,
     rating:"4.2",
     type:"Continental • Italian",
     price:"₹1300 for two",
     location:"Turquoise Complex, Navrangpura,...",
     distance:"3.8 km",
      highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 40% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/7/18/c80c831a-8a7b-42a9-a177-6dd50cbe054c_Ahmedabad5100e5ff5efdf4eacb309860c68a3d835.JPG"
    },
    {
      badge: "GIRF SPECIAL",
     name:"Cafe 1st Story - Fairfield by Marriott" ,
     rating:"4.2",
     type:"Continental • Beverages",
     price:"₹2000 for two",
     location:"Fairfield by Marriott, Usmanpura,...",
     distance:"4.2 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },

      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/bell.png",
        text: "Buffet",
      }
    ],
     offer: "Flat 50% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661382519/rvlcan9cblspvatnty8y.jpg"
    },
     {
     name:"The Bent Spoon" ,
     rating:"4.0",
     type:"Chinese • North Indian", 
     price:"₹1000 for two",
     location:"Hyatt Vastrapur, Vastrapur, Ahmedabad",
     distance:"2.2 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 40% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1667088045/zswrzoyxb0jtkwhnyths.jpg"
    },

    {
    badge: "GIRF SPECIAL",
     name:"Mrs Mage" ,
     rating:"4.5",
     type:"North Indian • Continental",
     price:"₹2000 for two",
     location:"Fairfield by Marriott, Usmanpura,...",
     distance:"7.2 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },

      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/bell.png",
        text: "Buffet",
      }
    ],
     offer: "Flat 40% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1702471977/07514b1a220191419cddf8a886c02b44.jpg"
    },
    {
      badge: "GIRF SPECIAL",
     name:"Kesar - Royal Cuisines of" ,
     rating:"4.0",
     type:"Mughlai • North Indian",
     price:"₹3000 for two",
     location:"Fairfield by Marriott, Usmanpura,...",
     distance:"7.8 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 45% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1690974839/e9a54cc2edd0ac30ff564aae5fbb1b7d.webp"
    },


    {
      badge: "GIRF SPECIAL",
     name:"Cafe Treat" ,
     rating:"4.0",
     type:"Continental • North Indian",
     price:"₹2000 for two",
     location:"Hotel Pride Plaza, Bodakdev, Ahmedabad",
     distance:"8.9 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/bell.png",
        text: "Buffet",
      }
    ],
     offer: "Flat 50% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661987257/x3w59bvmnwrhhgya3r7l.jpg"
    },

     {
     name:"DosBros - Fresh Mexican Grill" ,
     rating:"4.4",
     type:"Desserts • Mexican",
     price:"₹2000 for two",
     location:"Thaltej, Ahmedabad",
     distance:"10.8 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 30% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/16/7e6b41ae-e157-42e2-b6a2-2725988f930e_image03f3d29352c0a4732b69ac0e80c2258c4.JPG",
    },


    {
      badge: "GIRF SPECIAL",
     name:"The Square - Novotel" ,
     rating:"4.2",
     type:"Continental • North Indian",
     price:"₹2000 for two",
     location:"Novotel Ahmedabad, Satellite, Ahmedabad",
     distance:"9.2 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",

      },

      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/bell.png",
        text: "Buffet",
      }
    ],
     offer: "Flat 50% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1689327234/47c8d2a898431c88ab7c5e8944249f4c.jpg",
    },

    {
     name:"Sankalp" ,
     rating:"4.3",
     type:"South Indian • Beverages",
     price:"₹600 for two",
     location:"Samir Building, Navrangpura, Ahmedabad", 
     distance:"3.6 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 20% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661288558/wrhihcyal7vjuirzfxpk.jpg",
    },

    {
     name:"Anwar E Hilal Restaurant" ,
     rating:"4.3",
     type:"North Indian • Chinese",
     price:"₹200 for two",
     location:"Fairfield by Marriott, Usmanpura,...",
     distance:"1 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 10% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/6/14/29707d9d-a945-4b1d-9529-8bb6c333bffc_image110e4318b62b249c191b48d88504bfc65.JPG",
    },


    {
      badge: "GIRF SPECIAL",
     name:"Volga" ,
     rating:"4.2",
     type:"North Indian • Beverages",
     price:"₹1100  for two",
     location:"Khanpur, Ahmedabad",
     distance:"1.4 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 30% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 

    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/9/22/b59ef5c7-a526-4580-a4b3-4213a31eeefe_image19a1965baf2c84e23a4589246a4664aa6.JPG",
    },

    {
     name:"Sankalp" ,
     rating:"4.3",
     type:"South Indian • Beverages",
     price:"₹600 for two",
     location:"Ashram Road, Ahmedabad",
     distance:"3 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 20% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661200631/tzedayawyfglmrsjzda3.jpg",
    },

    {
     name:"Iqbal Fast Food & Sweets" ,
     rating:"1.0",
     type:"Fast Food",
     price:"400 for two",
     location:"Jamalpur, Ahmedabad",
     distance:"4.2 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 20% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1696837694/9e56441b76f19d8ad2ea25a6115cf6b1.jpg",
    },

    {
     name:"Bombay Darbar Biryani" ,
     rating:"3.0",
     type:"Chinese",
     price:"₹400 for two",
     location:"Rakhial, Ahmedabad",
     distance:"1.9 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 30% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661937637/l3hu18ihedtojamzsrxh.webp",
    },




    {
     name:"Jeeman by Shivshakti Dhaba" ,
     rating:"3.0",
     type:"North Indian • Beverages",
     price:"₹400 for two",
     location:"Hilltown Plaza, Nikol, Ahmedabad",
     distance:"10.5 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 15% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/9/1/6b00a9a0-6eb2-4895-8a68-33c9beb63f26_image10f6dd936462fe41cdb2116911564b1f43.JPG",
    },
    {
     name:"The Bent Spoon" ,
     rating:"4.0",
     type:"Chinese • North Indian", 
     price:"₹1000 for two",
     location:"3 by OYO - Nami Residency, Ellis Bridge,",
     distance:"2.2 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 30% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1667088045/zswrzoyxb0jtkwhnyths.jpg"
    },


    {
     name:"Bansi Restaurant" ,
     rating:"3.9",
     type:"Beverages • North Indian",
     price:"₹600 for two",
     location:"Fairfield by Marriott, Usmanpura,...",
     distance:"2.3 km", 
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 15% off on pre-booking",
      moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/6/27/4b6b266e-93f8-4dfd-8ed2-ce0378153c52_20240627T110040764.jpg",
    },


    {
     name:"Table Tales - Prahladnagar" ,
     rating:"4.3",
     type:"North Indian • Continental",
     price:"₹1000 for two",
     location:"Ratnanjali Solitaire, Prahlad Nagar,",
     distance:"8.1 km",
     highlights: [
      {
        icon: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
        text: "Table booking",
      },
    ],
     offer: "Flat 10% off on pre-booking",
     moreOffers: 1, 
     bankOffer: "Up to 10% off with bank offers", 
     image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/5/31/933e781a-a5c5-4587-aeb3-73f75d2c00a5_image3660fce5f3037043cdbe490b26b942b68b.JPG",
    },

  ];


  const updateButtons = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    setDisablePrev(scrollLeft <= 0);
    setDisableNext(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const scroll = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const itemWidth = carousel.firstChild.offsetWidth + 20;
    carousel.scrollBy({
      left: direction === "next" ? itemWidth * 2 : -itemWidth * 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.addEventListener("scroll", updateButtons);
    updateButtons();
    return () => carousel.removeEventListener("scroll", updateButtons);
  }, []);

  return (
    <div className="container mt-4 mb-5 position-relative">
     
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">{title}</h2>
        <div>
          <button
            onClick={() => scroll("prev")}
            className="btn btn-outline-dark me-2"
            disabled={disablePrev}
            style={{ height: "40px", width: "40px" }}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("next")}
            className="btn btn-outline-dark"
            disabled={disableNext}
            style={{ height: "40px", width: "40px" }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      
      <div
        ref={carouselRef}
        className="d-flex"
        style={{
          gap: "20px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "10px 0",
        }}
      >
        {restaurants.map((r, i) => (
          <div
            key={i}
            className="shadow-sm card position-relative"
            style={{
              minWidth: "280px",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              flexShrink: 0,
            }}
            onClick={() =>
              window.open("https://www.swiggy.com/restaurants/1088406/dineout", "_blank")
            }
          >
           
            {r.badge && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 2,
                  backgroundColor: "#ff4d4f",
                  color: "#fff",
                  padding: "4px 8px",
                  borderRadius: "0 8px 8px 0",
                  fontSize: "12px",
                  fontWeight: "bold",
                  top: "10px",
                  left: "0",
                }}
              >
                {r.badge}
              </div>
            )}

            
            <div style={{ position: "relative" }}>
              <img
                src={r.image}
                alt={r.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  left: "8px",
                  right: "8px",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.name}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    padding: "2px 6px",
                    borderRadius: "6px",
                  }}
                >
                  <FaStar style={{ color: "#00c853", fontSize: "14px" }} />
                  <span style={{ fontSize: "13px" }}>{r.rating}</span>
                </span>
              </div>
            </div>

           
            <div className="p-3">
              <p
                className="text-muted mb-1"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                {r.type} <span style={{ float: "right",marginLeft:"20px" }}>{r.price}</span>
              </p>
              <p
                className="text-muted mb-2"
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                {r.location} <span style={{ float: "right",marginLeft:"20px" }}>{r.distance}</span>
              </p>

                       
{r.highlights && r.highlights.length > 0 && (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "10px",
    }}
  >
    {r.highlights.map((h, idx) => (
      <div
        key={idx}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 8px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: "bold",
          backgroundColor: "#fff",
        }}
      >
        <img src={h.icon} alt={h.text} height="18" />
        <span>{h.text}</span>
      </div>
    ))}
  </div>
)}

              {r.offer && (
                <div className="mt-3">
                  <button className="btn btn-success w-100 text-white" style={{backgroundColor:"#29ad7b",color:"#ffffff",fontSize:"13px",fontWeight:"600",border:"none",borderRadius:"8px",padding:"8px 12px",textAlign:"left"}}>


                    <img
    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
    alt="offer"
    height="20"
  />
               
                  {r.offer}
                   {r.moreOffers && <span style={{marginLeft:"40px"}}>+{r.moreOffers} more</span>}
                  </button>
                </div>
              )}


{r.bankOffer && (
  <div
    style={{
      marginTop: "6px",
    }}
  >
    <button
      style={{
        backgroundColor: "hsl(157, 62%, 43%)",
        color: "#ffffff",
        fontSize: "13px",
        fontWeight: "600",
        border: "none", 
        borderRadius: "8px",
        padding: "8px 12px",
        width: "100%",
        textAlign: "left",
      }}
    >

      {r.bankOffer}
      <NavLink href={r.link} />

    </button>
  </div>
)}


            </div>
          </div>
        ))}
      </div>

      <style>{`
        .d-flex::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

