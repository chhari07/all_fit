import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Banner from "./Banner";
import CardGrid from "./CardGrid";
import Cards from "./Cards";



const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
       <Banner/>
       <Cards />
      <CardGrid />
    </>
  );
};

export default Home;
