import { getServerSession } from 'next-auth'
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/authOptions"


import { FirebookIcon } from "@/components/icons";
import { ProfileIcon } from './profileIcon';
import { AuthButton } from './authButton';

export async function Header() {
  // @ts-expect-error
  const session = await getServerSession(getAuthOptions())

  return (
    <section className="flex items-center justify-center w-full py-6 md:py-7 lg:py-8 xl:py-9 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-row w-full max-w-screen-xl">
        <div className="pl-10">
          <FirebookIcon wh="90" />
        </div>
        <div className="flex-grow text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Unorthodox Drafting
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
            for Dota 2
          </p>
        </div>
      </div>
      <div className="m-2">
        {session?.user ? (
          <ProfileIcon user={session?.user} />
        ) : (
          <AuthButton />
        )}

      </div>
    </section>
  )
}
