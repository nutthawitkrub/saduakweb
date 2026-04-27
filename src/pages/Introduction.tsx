"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

const Introduction: React.FC = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-6 sm:space-y-6 lg:space-y-8 z-20 relative px-4 sm:px-0 text-center lg:text-left" id="introduction">
              <h1 className="text-8xl sm:text-4xl lg:text-9xl font-bold text-gray-900 leading-tight mt-10 scroll-animate">
                SADUAK
              </h1>
              <div className="space-y-2 mt-10 scroll-animate">
                <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-[#396cac] ">
                  Local Tasty
                </h2>
                <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-[#396cac] ">
                  Fast Delivery
                </h2>
                <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-[#396cac] ">
                  Guaranteed Reliable
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-bold scroll-animate">
                We&apos;re building more than a delivery app — we&apos;re creating a trusted food ecosystem for students, employees, and local vendors. Born from real problems on campus, our mission is simple: make food access easier, safer, and fairer for everyone. This is for the people — not profit alone.
              </p>
            </div>

            {/* Right Content - Phones */}
            <div className="relative flex justify-center lg:justify-end lg:pr-4 ">
              <div className="relative">

                {/* Background Phone */}
                <div className="w-[200px] sm:w-[200px] md:w-[400px] lg:w-[500px] h-[320px] sm:h-[450px] md:h-[600px] lg:h-[750px] rounded-2xl overflow-hidden relative z-10 ">
                  <Image
                    src="/images/customer_page-removebg-preview.png"
                    alt="Food Delivery App Interface"
                    className="w-full h-full object-cover rounded-3xl"
                    width="500"
                    height="500"
                  />
                </div>

                {/* Foreground Phone */}
                <div className="absolute top-20 sm:top-10 md:top-12 lg:top-8 left-10 sm:left-16 md:left-20 lg:-left-25 
                  w-[150px] sm:w-[250px] md:w-[350px] lg:w-[500px] 
                  h-[240px] sm:h-[400px] md:h-[550px] lg:h-[750px] z-20">
                  <Image
                    src="/images/Phone_Saduak-removebg-preview.png"
                    alt="Saduak Logo Screen"
                    className="w-full h-full object-cover rounded-3xl"
                    width="1000"
                    height="1000"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Introduction;
