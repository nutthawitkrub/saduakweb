"use client";

import React, { useEffect } from 'react';
import Members from '../../components/Member';
import Carousel from '../../components/Carousel';

const AboutUs: React.FC = () => {
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

  
  const teamMembers = [
    {
      id: "toto",
      name: "Nutthawit Morkkaew",
      instagramid: "@nuttha.wit",
      link: "https://www.instagram.com/nuttha.wit",
    },
    {
      id: "boss",
      name: "Chatchawee Rajposri",
      instagramid: "@b.47pw",
      link: "https://www.instagram.com/b.47pw",
    },
    {
      id: "earth",
      name: "Krissada Jurjun",
      instagramid: "@elonverse556",
      link: "https://www.instagram.com/sara.lee",
    },
    {
      id: "dream",
      name: "Pariyakorn Kanlayavinai",
      instagramid: "@d_dreaminn",
      link: "https://www.instagram.com/d_dreaminn",
    },
    {
      id: "shuncey",
      name: "Shuncey Balba",
      instagramid: "@shuncey_b",
      link: "https://www.instagram.com/shuncey_b",
    },
     {
      id: "jame",
      name: "Hkawng Lum",
      instagramid: "@vk_jame_9",
      link: "https://www.instagram.com/vk_jame_9",
    },
    {
      id: "mitsu",
      name: "Sanguansak Sanpen",
      instagramid: "@lilmitzzz",
      link: "https://www.instagram.com/lilmitzzz",
    },
    {
      id: "puen",
      name: "Sattra Ponviriyasakul",
      instagramid: "@ilivethai",
      link: "https://www.instagram.com/ilivethai",
    },
    {
      id: "aj",
      name: "Adriel Jesse Montejo",
      instagramid: "@not.ajesse",
      link: "https://www.instagram.com/not.ajesse",
    },
    {
      id: "ken",
      name: "Tammarong Pakittiwet",
      instagramid: "@k__3np",
      link: "https://www.instagram.com/k__3np",
    },
  ];

  return (
    <section className="flex flex-col min-h-screen py-20 text-2xl md:text-3xl bg-[#344F71] text-white" id="Team">
      <div className="container mx-auto px-11 scroll-animate">
        <p className="leading-tight max-w-5xl mx-auto text-3xl tracking-tight">
          We&apos;re come from <strong>Information of Technology and Digital Innovation (IBIT)</strong> of King Mongkut&apos;s University of Technology North Bangkok.
          of Thailand, With our member that have different skills and performance,We have guaranteed with our passion, our hardwork to our project.
          <br />
          <strong>Let us introduce our team members</strong>
        </p>
      </div>

      <div className="container mx-auto px-11 text-center mt-28 scroll-animate">
        <h2>Our Team</h2>
        <div>&ldquo;Saduak&rdquo; Team</div>
        <div className="mt-10">
          <Carousel>
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] pt-4"
              >
                <Members
                  id={member.id}
                  name={member.name}
                  instagramid={member.instagramid}
                  link={member.link}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      
    </section>
  );
};

export default AboutUs;
