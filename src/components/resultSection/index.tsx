import { HeroCard } from './heroList';
import { Hero } from '@/types';

interface ResultSectionProps {
  heroes: Hero[];
}

export default function ResultSection({ heroes }: ResultSectionProps) {
  return (
    <div className="flex flex-nowrap justify-center m-8">
      <div className="flex overflow-x-scroll space-x-4 drop-shadow-md">
        {heroes.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}
