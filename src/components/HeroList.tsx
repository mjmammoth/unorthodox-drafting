import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { HeroCard } from "@/types/hero"

export function HeroCard({ hero }: HeroCard ) {
  const portraitUrl = `https://cdn.cloudflare.steamstatic.com/${hero.img}`;

  const roleTags = hero.roles.map((role) => (
    <span key={role} className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-md">{role}</span>

  ));
  return (
    <Card className="w-full min-w-52 max-w-52 item-start">
      <Card>
        <div className="p-4 grid items-center">
          <div className="flex flex-col items-center">
            <div className="w-full h-24 flex items-center justify-center">
              <Avatar className="w-full h-full border-none">
                <AvatarImage src={portraitUrl} />
                <AvatarFallback>Hero</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid gap-0.5 mt-2">
              <h3 title="Hero Name" className="text-lg font-bold">{hero.localized_name}</h3>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-100 dark:border-gray-800" />
        <CardContent className="p-4 flex flex-col">
          <dl className="grid grid-cols-2 gap-1 text-sm w-full">
            <dt className="text-gray-500 dark:text-gray-400">Legs</dt>
            <dd className="text-right">{hero.legs}</dd>
            <dt className="text-gray-500 dark:text-gray-400">Attack Type</dt>
            <dd className="text-right">{hero.attack_type}</dd>
          </dl>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {roleTags}
          </div>
        </CardContent>
      </Card>
    </Card>
  )
}
