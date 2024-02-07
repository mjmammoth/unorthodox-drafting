"use client"

import React, { useState, useEffect } from 'react';
import { HeroSlider } from "./HeroSlider"
// import { HeroAvatar } from "./hero-avatar"
import { HeroCard } from "./HeroList"


export function Heroes() {
  const [sliderValue, setSliderValue] = useState(5);
  const [heroes, setHeroes] = useState([]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  useEffect(() => {
    fetch("https://api.opendota.com/api/heroes")
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
      });
  }, []);

  const displayHeroes = heroes.slice(0, sliderValue).map((hero, index) => (
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
