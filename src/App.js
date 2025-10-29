import BestFoodCarousel from './components/BestFoodCarousel';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InstamartSlider from './components/InstamartSlider';
import DineoutCarousel from './components/DineoutCarousel';
import Getapp from './components/Getapp';
import CityList from './components/CityList';
import Cities from './components/Cities';
import Footer from './components/Footer';

const App = () => {

  const food  = [
   {
     img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
    link:"https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
  },
  {
  img :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
  link:"https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",  

  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada%20Pav.png",
    link:"https://www.swiggy.com/collections/80417?collection_id=80417&type=rcv2",

  },
  {
   img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
   link:"https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2" 
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
    link:"https://www.swiggy.com/collections/80463?collection_id=80463&type=rcv2" 

  },
  {

     img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png",
     link:"https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2"
  },


  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
    link:"https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2"
  },

  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png",
    link:"https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2"

  },

  {
   img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
   link:"https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2"
  },

  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",
    link:"https://www.swiggy.com/collections/80479?collection_id=80479&type=rcv2 "
  },

  
  

 ];




  const food2 = [
  
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png",
    link:"https://www.swiggy.com/collections/80455?collection_id=80455&type=rcv2"
  },

  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Samosa.png",
    link:"https://www.swiggy.com/collections/80396?collection_id=80396&type=rcv2"

  },

  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Juice.png",
    link:"https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2"
  },

  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png",
    link:"https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2"
  },

  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png",
    link:"https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2"

  },

  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
    link:"https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2"

  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png",
    link:"https://www.swiggy.com/collections/80425?collection_id=80425&type=rcv2"
  },


  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png",
    link:"https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2" 
  },

  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png",
    link:"https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2"

  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dhokla.png",
    link:"https://www.swiggy.com/collections/80422?collection_id=80422&type=rcv2"
  },
  {
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Lassi.png",
    link:"https://www.swiggy.com/collections/80458?collection_id=80458&type=rcv2"
  }
 ];







  return (
    <>
      <Navbar />
     


     <HeroSection   /> 
     <br />
     <br />
     <br />
    <BestFoodCarousel title="Order our best food options" items={food} />

   <BestFoodCarousel  items={food2} hideButtons={true}/>
   <br />
   <br />
  
   <InstamartSlider title="Shop groceries on Instamart" />

   <br />
   <br />
   <br />

   <DineoutCarousel title="Discover best restaurants on Dineout" />
    <br />
    <br />

    <Getapp />
    <br />
    <br />

    <CityList  />

     <Cities  />

     <br />
     <br />
     <Footer />

    
    </>

  )
}
export default App



