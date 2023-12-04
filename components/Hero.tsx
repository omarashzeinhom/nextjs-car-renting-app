"use client";

import Image from "next/image";
import { CustomButton } from "./index";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Explore , book , or rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortles booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue 
        text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/heroalt.webp"
            alt="hero"
            fill
            className="object-contain"
            loading="lazy"
          />
          <div className="hero__image-overlay">
            <Image
              src="/hero-altbg.webp"
              alt="hero"
              fill
              className="object-contain sm:object-fill"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
