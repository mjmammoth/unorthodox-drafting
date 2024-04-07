"use client"
import { signIn } from "next-auth/react"

export function AuthButton(){
  return (
    <div className="flex items-center justify-center bg-slate-900 text-white rounded-md">
      <button 
        onClick={() => signIn('steam')}
        className="bg-steam-lightGray  text px-5 py-3 rounded-md font-bold flex items-center space-x-4 hover:bg-gray-600 transition duration-75">
        <i className="fa-brands fa-steam text-xl"></i>
        <span>Login with Steam</span>
      </button>
    </div>
  )
}
