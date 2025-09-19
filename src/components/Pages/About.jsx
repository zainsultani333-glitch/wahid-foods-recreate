import React, { useEffect } from "react";
import { FaShippingFast, FaLock, FaRegCommentDots } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#edf8f5]">
      {/* About Text */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6 text-center mt-8">
        <h1
          data-aos="zoom-in"
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#00809d]"
        >
          About Wahid Foods SMC
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4"
        >
          WahidFoodsSMC is your one-stop destination for Premium Quality
          Products. Our diverse portfolio includes Food Flavouring Powder,
          Himalayan salt products, Mining Stones, and Premium Dried Rose Petals.
          Through relentless innovation and an unwavering commitment to our
          consumers and customers, we deal in retail and wholesale to provide
          quality products. We are committed to a seamless and enjoyable
          shopping experience, with a focus on quality, value, and customer
          satisfaction.
        </p>
      </div>

      {/* Bottom 3 Posts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-6 max-w-6xl w-full px-4 sm:px-6">
        {/* Post 1 */}
        <div
          data-aos="slide-up"
          data-aos-delay="100"
          className="flex flex-col items-center text-center bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
        >
          <FaShippingFast className="text-3xl sm:text-4xl text-[#00809d] mb-3" />
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Fast Shipping
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Get your orders delivered quickly and reliably, wherever you are.
          </p>
        </div>

        {/* Post 2 */}
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col items-center text-center bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
        >
          <FaLock className="text-3xl sm:text-4xl text-[#00809d] mb-3" />
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Secure Payments
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Your transactions are protected with industry-leading security.
          </p>
        </div>

        {/* Post 3 */}
        <div
          data-aos="slide-up"
          data-aos-delay="300"
          className="flex flex-col items-center text-center bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:border hover:border-[#00809d] hover:shadow-xl transition-all duration-300"
        >
          <FaRegCommentDots className="text-3xl sm:text-4xl text-[#00809d] mb-3" />
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            24/7 Support
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Our support team is always here to help you with any questions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
