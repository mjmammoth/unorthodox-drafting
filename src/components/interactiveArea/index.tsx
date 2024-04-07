"use client"
import { useReducer, useEffect, useState } from 'react';
import { FilterState, FilterActions, Hero } from "@/types"
import FilterSection from '@/components/filterSection'
import ResultSection from '@/components/resultSection'
import { search } from './actions'

// Data
import combinedHeroData from '@/data/combined.json';

function filtersReducer(state: FilterState, action: FilterActions) {
  switch (action.type) {
    case 'SET_COLOUR':
      return { ...state, hexColour: action.payload };
    default:
      throw new Error();
  }
}

const initialState: FilterState = {
  hexColour: '#123524'
};

export default function InteractiveArea() {
  const [filterState, dispatch] = useReducer(filtersReducer, initialState);
  const [HeroResults, setHeroResults] = useState<Hero[]>([]);

  useEffect(() => {
    console.log('Filter state change:', filterState);
    const searchResults =  search(filterState)
    searchResults.then((data) => {
      const heroes = data.map((id: number) => combinedHeroData.find(hero => hero.id === id)).filter(Boolean) as Hero[];
      setHeroResults(heroes);
    }, (error) => {
      console.error('Error searching:', error);
    });
  }, [filterState]);

  return (
    <div>
      <FilterSection filterState={filterState} dispatch={dispatch}/>
      <ResultSection heroes={HeroResults}/>
    </div>
  )
}
