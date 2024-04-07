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
  hexColour: '#13BA6D'
};

const initialHeroResults: Hero[] = [76,36,80,111,108].map(getHeroById).filter(Boolean) as Hero[];

function getHeroById(id: number): Hero | undefined {
  return combinedHeroData.find(hero => hero.id === id);
}

export default function InteractiveArea() {
  const [filterState, dispatch] = useReducer(filtersReducer, initialState);
  const [HeroResults, setHeroResults] = useState<Hero[]>(initialHeroResults);

  useEffect(() => {
    console.log('Filter state change:', filterState);
    const searchResults =  search(filterState)
    searchResults.then((data) => {
      const heroes = data.map(getHeroById).filter(Boolean) as Hero[];
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
