"use client"
import { useReducer, useEffect, useState } from 'react';
import { FilterStates, FilterAction, Hero } from "@/types"
import FilterSection from '@/components/filterSection'
import ResultSection from '@/components/resultSection'
import { search } from './actions'
import { Reorder } from "framer-motion";
import { ToastContainer } from 'react-toastify';

// Data
import combinedHeroData from '@/data/combined.json';

function filtersReducer(state: FilterStates, action: FilterAction): FilterStates {
  switch (action.type) {
    case 'SET_FLYING':
      return { ...state, flying: action.payload };
    case 'SET_LEG_COUNT':
      return { ...state, legCount: action.payload };
    case 'SET_FACIAL_HAIR':
      return { ...state, facialHair: action.payload };
    case 'SET_ELEMENTAL_AFFINITY':
      return { ...state, elementalAffinity: action.payload };
    case 'SET_EYE_COUNT':
      return { ...state, eyeCount: action.payload };
    case 'SET_HEX_COLOUR':
      return { ...state, hexColour: action.payload };
    default:
      return state;
  }
}

const initialState: FilterStates = {
  hexColour: '#13BA6D',
  flying: false,
  legCount: 0,
  facialHair: false,
  elementalAffinity: 'Water',
  eyeCount: {'value': 3, 'operator': '='},
};

// const initialOrder all keys in FilterStates
const initialOrder = Object.keys(initialState);

const initialHeroResults: Hero[] = [76,36,80,111,108].map(getHeroById).filter(Boolean) as Hero[];

function getHeroById(id: number): Hero | undefined {
  return combinedHeroData.find(hero => hero.id === id);
}

export default function InteractiveArea() {
  const [filterStates, dispatch] = useReducer(filtersReducer, initialState);
  const [HeroResults, setHeroResults] = useState<Hero[]>(initialHeroResults);

  const [filtersOrder, setFiltersOrder] = useState(initialOrder);
  const handleReorder = (newOrder: string[]) => {
    console.log('New order:', newOrder);
    setFiltersOrder(newOrder);
  };

  useEffect(() => {
    console.log('Filter state change:', filterStates);
    const searchResults =  search(filterStates)
    searchResults.then((data) => {
      const heroes = data.map(getHeroById).filter(Boolean) as Hero[];
      setHeroResults(heroes);
    }, (error) => {
      console.error('Error searching:', error);
    });
  }, [filterStates]);

  return (
    <div className="flex">
      <Reorder.Group axis="y" onReorder={handleReorder} values={filtersOrder}>
        <FilterSection filterStates={filterStates} dispatch={dispatch} filtersOrder={filtersOrder} />
      </Reorder.Group>
      <ResultSection heroes={HeroResults}/>
    </div>
  )
}
