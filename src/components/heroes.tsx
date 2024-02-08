"use client"

import React, { useState, useEffect } from 'react';
import { HeroSlider } from "./HeroSlider"
// import { HeroAvatar } from "./hero-avatar"
import { HeroCard } from "./HeroList"

interface HeroProps {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  legs: number;
}

export interface HeroCardProps {
  hero: HeroProps;
}

export function Heroes() {
  const [sliderValue, setSliderValue] = useState<number>(5);
  const [heroes, setHeroes] = useState([]);

  const handleSliderChange = (value : number) => {
    setSliderValue(value);
  };

  useEffect(() => {
    fetch("https://api.opendota.com/api/heroes")
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
      });
  }, []);

  const displayHeroes = heroes.slice(0, sliderValue).map((hero : HeroProps, index) => (
    <HeroCard key={hero.id} hero={hero} />
  ));

  return (
    <div className="my-2">
      <HeroSlider onSliderValueChange={handleSliderChange} />
      <div className="flex flex-nowrap justify-center">
        <div className="flex overflow-x-scroll space-x-4 drop-shadow-md">
          {displayHeroes}
        </div>
      </div>
    </div>
  )
}
