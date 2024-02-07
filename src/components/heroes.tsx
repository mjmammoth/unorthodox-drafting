import React, { useState } from 'react';
import { HeroSlider } from "./hero-slider"
// import { HeroAvatar } from "./hero-avatar"
import { HeroCard } from "./hero-card"


async function fetchHeroes() {
  const res = await fetch("https://api.opendota.com/api/heroes");
  return res.json();
}

export async function Heroes() {
  const [sliderValue, setSliderValue] = useState(5);
  const heroData = await fetchHeroes();

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
