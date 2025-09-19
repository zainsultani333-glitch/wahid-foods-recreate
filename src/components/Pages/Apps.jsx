import React, { useEffect } from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function AppSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="bg-[#e8f6f3] py-16 ">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2
          data-aos="fade-down"
          data-aos-duration="800"
          className="text-4xl font-bold mb-20 text-[#00809d] text-center"
        >
          Wahid Foods SMC. Mobile Apps
        </h2>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Android App */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center jus bg-[#f5fafd] p-8 rounded-2xl shadow-md w-full max-w-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-[#eaf7f4] p-6 rounded-full mb-6">
              <FaAndroid className="text-[#00809d] text-5xl" />
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Android App
            </h3>

            <p className="text-gray-600 text-center mb-6 text-base font-normal">
              Wahid Foods SMC. Android app offers a seamless shopping
              experience, push notifications, and secure payments. Download now
              and enjoy exclusive mobile deals!
            </p>

            {/* Span Section */}
            <div className="w-full flex flex-col items-start space-y-1 text-left mb-6 ">
              <p>
                <span className="text-base font-medium">Version:</span> 2.3.1{" "}
                <br />
                <span className="text-base  font-medium">App Size:</span> 28 MB{" "}
                <br />
                <span className="text-base  font-medium">
                  Last Update:
                </span>{" "}
                2024-05-01 <br />
                <span className="text-base  font-medium">Downloads:</span>{" "}
                1,200,000+
              </p>
            </div>

            <a
              href="#"
              className="bg-[#00809d] text-white py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-[#006f85]"
            >
              Download for Android
            </a>
          </div>

          {/* iOS App */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col items-center bg-[#f5fafd] p-8 rounded-2xl shadow-md w-full max-w-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
          >
            <div className="bg-[#eaf7f4] p-6 rounded-full mb-6">
              <FaApple className="text-[#00809d] text-5xl" />
            </div>

            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              iOS App
            </h3>

            <p className="text-gray-600 text-center mb-6">
              Wahid Foods SMC. iOS app brings you the best of our store, with
              fast checkout, order tracking, and personalized recommendations.
              Get it on your iPhone or iPad today!
            </p>

            {/* Span Section */}
            <div className="w-full flex flex-col items-start space-y-1 text-left mb-6">
              <p>
                <span className="font-medium">Version:</span> 2.3.1 <br />
                <span className="font-medium">App Size:</span> 32 MB <br />
                <span className="font-medium">
                  Last Update:
                </span> 2024-05-01 <br />
                <span className="font-medium">Downloads:</span> 900,000+
              </p>
            </div>

            <a
              href="#"
              className="bg-[#00809d] text-white py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-[#006f85]"
            >
              Download for iOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppSection;
