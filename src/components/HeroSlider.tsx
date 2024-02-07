"use client"

import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";

interface HeroSliderProps {
  onSliderValueChange: (value: number | number[]) => void;
}

export function HeroSlider({ onSliderValueChange }: HeroSliderProps) {
  const [value, setValue] = useState([5]);
  const handleChange = (newValue) => {
    setValue(newValue);
    onSliderValueChange(newValue);
  };
  return (
    <section className="w-full max-w-md mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Number of heroes</h2>
      <Slider className="w-full" defaultValue={[5]} max={5} min={1} onValueChange={handleChange} />
    </section>
  );
}
