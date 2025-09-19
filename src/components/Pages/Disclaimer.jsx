import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaExclamationTriangle,
  FaExclamationCircle,
  FaInfoCircle,
  FaBalanceScale,
  FaGavel,
} from "react-icons/fa";

function Disclaimer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#edf8f5] p-8">
      {/* Heading */}
      <h1
        data-aos="fade-down"
        data-aos-duration="800"
        className="text-4xl font-bold mb-20 text-[#00809d] text-center"
      >
        Product Disclaimer
      </h1>

      {/* 6 Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Post 1 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="bg-white p-6 rounded-2xl shadow-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-5">
            <div className="bg-[#eaf7f4] rounded-lg p-3 mr-3 flex items-center justify-center">
              <FaExclamationTriangle className="text-[#00809d] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Accuracy of Information
            </h3>
          </div>
          <p className="text-gray-600 font-normal text-sm leading-6">
            While we strive to provide accurate descriptions, images, and
            pricing for all products listed on Wahid Foods SMC., we cannot
            guarantee that all information is always up-to-date or error-free.
            Product colors, packaging, and specifications may vary from those
            shown due to manufacturer updates or differences in display
            settings.
          </p>
        </div>

        {/* Post 2 */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-white p-6 rounded-2xl shadow-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-5">
            <div className="bg-[#eaf7f4] rounded-lg p-3 mr-3 flex items-center justify-center">
              <FaExclamationCircle className="text-[#00809d] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Product Availability
            </h3>
          </div>
          <p className="text-gray-600 font-normal text-sm leading-6">
            All products are subject to availability. We reserve the right to
            limit quantities or discontinue any product at any time without
            prior notice.
          </p>
        </div>

        {/* Post 3 */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-white p-6 rounded-2xl shadow-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-5">
            <div className="bg-[#eaf7f4] rounded-lg p-3 mr-3 flex items-center justify-center">
              <FaInfoCircle className="text-[#00809d] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Health & Safety
            </h3>
          </div>
          <p className="text-gray-600 font-normal text-sm leading-6">
            Please read all product labels, warnings, and directions provided by
            the manufacturer before use. Wahid Foods SMC. is not responsible for
            any adverse effects or damages resulting from the use or misuse of
            any product purchased through our platform.
          </p>
        </div>

        {/* Post 4 */}
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="bg-white p-6 rounded-2xl shadow-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-5">
            <div className="bg-[#eaf7f4] rounded-lg p-3 mr-3 flex items-center justify-center">
              <FaBalanceScale className="text-[#00809d] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              External Links
            </h3>
          </div>
          <p className="text-gray-600 font-normal text-sm leading-6">
            Our website may contain links to third-party sites for additional
            product information. We are not responsible for the content or
            accuracy of information on external sites.
          </p>
        </div>

        {/* Post 5 */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-white p-6 rounded-2xl shadow-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-5">
            <div className="bg-[#eaf7f4] rounded-lg p-3 mr-3 flex items-center justify-center">
              <FaGavel className="text-[#00809d] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Legal Liability
            </h3>
          </div>
          <p className="text-gray-600 font-normal text-sm leading-6">
            Wahid Foods SMC. is not liable for any direct, indirect, incidental,
            or consequential damages arising from the use of products purchased
            from our site. All purchases are subject to our Terms & Conditions
            and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
