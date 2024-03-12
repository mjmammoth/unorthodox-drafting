"use client"
import React, { useReducer, useEffect, useState, useCallback } from 'react';
import ColourFilter from '@/components/filters/ColourFilter';
import { HeroCard } from './HeroList';
import combinedHeroData from '@/data/combined.json';
import { Hero, FilterState, FilterActions } from "@/types"
import { Colour } from '@/types';


function filtersReducer(state: FilterState, action: FilterActions) {
  switch (action.type) {
    case 'SET_COLOUR':
      return { ...state, colour: action.payload };
    default:
      throw new Error();
  }
}

function shuffleArray(array: Hero[]) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function SearchSection() {
  const [state, dispatch] = useReducer(filtersReducer, {
    colour: '#123524'
  });

  const [displayHeroes, setDisplayHeroes] = useState<Hero[]>([]);
  const setColour = (colour: Colour) => dispatch({ type: 'SET_COLOUR', payload: colour });

  const performSearch = useCallback(async () => {
    console.log('Searching with filters:', state);
    const queryParams = new URLSearchParams({
      colour: state.colour,
    }).toString();
    const searchUrl = `/api/heroes?${queryParams}`;

    try {
      const response = await fetch(searchUrl);
      const data = await response.json();
      const heroes = data.map((id: number) => combinedHeroData.find(hero => hero.id === id)).filter(Boolean) as Hero[];
      setDisplayHeroes(heroes);
    } catch (error) {
      console.error('Error searching:', error);
    }
  }, [state]);

  useEffect(() => {
    const shuffledHeroes = shuffleArray([...combinedHeroData]);
    setDisplayHeroes(shuffledHeroes);
  }, []);

  useEffect(() => {
    performSearch();
  }, [performSearch]);

  return (
    <div>
      <div key="1" className="flex flex-col items-center justify-center m-8">
        <div className="w-full max-w-2xl p-4 rounded-lg shadow-inner mt-4 relative dark:bg-stone-100">
          <h2 className="text-2xl font-bold mb-2 flex justify-between items-center text-gray-800">Filters</h2>
          <div className="grid gap-4">
            <ColourFilter colour={state.colour} setColour={setColour} />
          </div>
        </div>
      </div>
      <div className="flex flex-nowrap justify-center m-8">
        <div className="flex overflow-x-scroll space-x-4 drop-shadow-md">
          {displayHeroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
