"use client";

import React from 'react';
import Image from "next/image";
import { TileWrapper, TileBackground, TileContent, Tile } from "../../components/Tile";
import {
  WorkContainer,
  WorkBackground,
  WorkLeft,
  WorkRight,
  WorkLink,
} from "../../components/EachScreen";

// Image assets
const IMAGES = {
  phone: "/images/Phone_Saduak-removebg-preview.png",
  customer: "/images/customer_page-removebg-preview.png",
  app1: "/images/image_1-removebg-preview.png",
} as const;

// Content data for each tile
const TILE_CONTENT = [
  {
    page: 0,
    title: "Smart Communication",
    subtitle: "Integrated chat system ensures no missed messages between buyers and sellers.",
    image: IMAGES.phone,
    alt: "Smart Communication Interface",
    link: undefined,
    subtitle2: undefined
  },
  {
    page: 1,
    title: "Reliable Orders & Delivery",
    subtitle: "Real-time order tracking with accurate preparation and delivery estimates.",
    link: undefined,
    image: IMAGES.customer,
    alt: "Reliable Orders & Delivery",
    subtitle2: undefined
  },
  {
    page: 2,
    title: "Trusted & Verified Sellers",
    subtitle: "Every store is identity-checked to eliminate scams and build buyer confidence.",
    image: IMAGES.app1,
    alt: "Trusted & Verified Sellers",
    link: undefined,
    subtitle2: undefined
  },
  {
    page: 3,
    title: "Quality & Accountability",
    subtitle: "Review and rating system rewards top performers and flags poor service.",
    subtitle2: "(73% of buyers want this feature)",
    image: IMAGES.phone,
    alt: "Quality & Accountability",
    link: undefined
  }
] as const;

// Reusable Tile Component
const WorkTile: React.FC<{
  page: number;
  title: string;
  subtitle: string;
  subtitle2?: string;
  image: string;
  alt: string;
  link?: string;
}> = ({ page, title, subtitle, subtitle2, image, alt, link }) => (
  <Tile page={page}>
    {({ progress }) => (
      <WorkContainer>
        <WorkLeft progress={progress}>
          <div className="text-4xl md:text-5xl font-semibold tracking-tight">
            {link ? (
              <WorkLink href={link}>{title}</WorkLink>
            ) : (
              title
            )}
          </div>
          <div className="text-lg md:text-xl mt-4">
            {subtitle}
          </div>
          {subtitle2 && (
            <div className="text-sm md:text-base mt-2 text-gray-400 italic">
              {subtitle2}
            </div>
          )}
        </WorkLeft>
        <WorkRight progress={progress}>
          <Image src={image} alt={alt} width={840} height={1620} />
        </WorkRight>
      </WorkContainer>
    )}
  </Tile>
);

const AppScreen: React.FC = () => {
  return (
    <TileWrapper numOfpages={TILE_CONTENT.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        {TILE_CONTENT.map((content) => (
          <WorkTile
            key={content.page}
            page={content.page}
            title={content.title}
            subtitle={content.subtitle}
            subtitle2={content.subtitle2}
            image={content.image}
            alt={content.alt}
            link={content.link}
          />
        ))}
      </TileContent>
    </TileWrapper>
  );
};

export default AppScreen;
