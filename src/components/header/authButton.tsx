"use client"
import { signIn, signOut } from "next-auth/react"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

type AuthButtonProps = {
  loggedIn: boolean;
};

export function AuthButton({loggedIn}: AuthButtonProps){
  return (
    <DropdownMenuItem onSelect={(e: Event) => {
      e.preventDefault()
      if (loggedIn) {
        signOut();
      } else {
        signIn();
      }
    }}>
      {loggedIn ? "Sign Out" : "Sign In"}
    </DropdownMenuItem>
  )
}
