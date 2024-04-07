"use client"
import { signOut } from "next-auth/react"
import { DefaultSession } from "next-auth"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

interface ProfileIconProps {
  user: DefaultSession["user"]
}

export function ProfileIcon({ user }: ProfileIconProps) {
  return (

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-20 w-20">
          <AvatarImage alt="Profile Image" src={user?.image ?? ""} />
          <AvatarFallback>MM</AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent collisionPadding={10}>
        <DropdownMenuItem>My Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

