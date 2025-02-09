import Hero from "../components/Hero";
import wave from '../assets/wave.svg'
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="relative w-full flex min-h-[calc(100vh-120px)]">
      <Helmet>
        <title> Byte Blaze | Home</title>
      </Helmet>
      <Hero></Hero>
      <img className="absolute w-full bottom-0" src={wave} alt="" />
    </div>
  );
};

export default Home;