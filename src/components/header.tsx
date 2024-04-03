import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { getServerSession } from 'next-auth'
import { AuthButton } from "./authButton"
import { getAuthOptions } from "@/app/api/auth/[...nextauth]/route"

import { FirebookIcon } from "../components/icons";

export async function Header() {
  const session = await getServerSession(getAuthOptions())
  console.log('session', session)
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-20 w-20">
              <AvatarImage alt="Profile Image" src={session?.user.image} />
              <AvatarFallback>MM</AvatarFallback>
              <span className="sr-only">Toggle user menu</span>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent collisionPadding={10}>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <AuthButton loggedIn={!!session?.user} />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  )
}
