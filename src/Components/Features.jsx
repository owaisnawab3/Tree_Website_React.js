import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHeadset, faTree, faHandHoldingDollar} from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <main>
      <div id="Features-Section" className="container mb-6">
        {/* <div id="Features" className="flex flex-col lg:flex-row md:px-20 lg:px-12 gap-6"> */}
        <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-20 lg:px-12">
          <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="0" className="hover:cursor-pointer shadow-lg hover:shadow-xl/20 transition-shadow duration-300 ease-in-out border border-[#032A17] rounded p-4 text-[#032A17]">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon className="text-3xl" icon={faTruck} />
              <h4 className="font-semibold font-jost">
                Fast <br /> Delivery
              </h4>
            </div>
            <p className="pt-4 font-lobster">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              quibusdam exercitationem explicabo
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200" className="hover:cursor-pointer shadow-lg hover:shadow-xl/20 transition-shadow duration-300 ease-in-out border border-[#032A17] rounded p-4 text-[#032A17]">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon className="text-3xl" icon={faHeadset} />
              <h4 className="font-semibold font-jost">
                Great Customer <br /> Service
              </h4>
            </div>
            <p className="pt-4 font-lobster">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              quibusdam exercitationem explicabo
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400" className="hover:cursor-pointer shadow-lg hover:shadow-xl/20 transition-shadow duration-300 ease-in-out border border-[#032A17] rounded p-4 text-[#032A17]">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon className="text-3xl" icon={faTree} />
              <h4 className="font-semibold font-jost">
                Original <br /> Plants
              </h4>
            </div>
            <p className="pt-4 font-lobster">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              quibusdam exercitationem explicabo
            </p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600" className="hover:cursor-pointer shadow-lg hover:shadow-xl/20 transition-shadow duration-300 ease-in-out border border-[#032A17] rounded p-4 text-[#032A17]">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon className="text-3xl" icon={faHandHoldingDollar} />
              <h4 className="font-semibold font-jost">
                Affordable <br /> Price
              </h4>
            </div>
            <p className="pt-4 font-lobster">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              quibusdam exercitationem explicabo
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Features;
