import React from "react";
import Introduction from "../pages/Introduction";
import AboutUs from "../pages/AboutUs";
import AppIntroduce from "../pages/AppIntroduce";
import AppScreen from "../pages/AppScreen";
import Scan from "../pages/Scan";


const Home: React.FC = () => {
  return (
   
      <div>
        <section className="bg-white text-white">
          <Introduction />

          {/* Wave divider */}
          <div className="relative">
            <svg
              className="absolute bottom-0 w-full block -mb-1 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#344F71" // color of next section
                d="M0,160L48,186.7C96,213,192,267,288,272C384,277,480,235,576,208C672,181,768,171,864,192C960,213,1056,267,1152,250.7C1248,235,1344,149,1392,106.7L1440,64L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section>
          <AboutUs />
        </section>


        
        <AppIntroduce />
        <AppScreen />
        <Scan />
      </div>
  );
};

export default Home;
