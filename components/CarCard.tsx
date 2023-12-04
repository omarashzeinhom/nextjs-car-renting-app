"use client";

import { useState } from "react";

import Image from "next/image";

import { CarProps } from "@/types";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
        <p className="flex mt-5 text-[32px] font-extrabold">
          <span className="self-star text-[-14px] font-semibold">$</span>
          {carRent}
          <span className="self-end text-[14px] font-medium">/day</span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/heroalt.webp"
            alt="hero"
            fill
            className="object-contain"
            loading="lazy"/>
        </div>

<div></div>



      </div>
    </div>
  );
};

export default CarCard;