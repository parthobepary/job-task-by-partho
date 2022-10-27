import React from "react";
import "../../assets/css/herosection.css";
import img2 from "../../assets/images/Rectangle 1.svg";
import img1 from "../../assets/images/Rectangle 6 (1).svg";

const HeroSection = () => {
  return (
    <div className="px-20 mt-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="item1 col-span-8">
          <div>
            <div className="text-right">
              <h2>React</h2>
              <h2>Conference</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 mt-5">
              <div>
                <img src={img1} alt="img1" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  accusamus nemo provident voluptatum quaerat ipsa. Unde,
                  cupiditate quasi. Eligendi, reprehenderit.
                </p>
                <div className="bookiong-btn">
                  <p className="mr-5">Buy Tickets</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </p>
                </div>
                <div className="flex scroll-down items-center">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </p>
                  <p>Scroll down </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="item2 col-span-4 mt-28">
          <img src={img2} alt="img2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;