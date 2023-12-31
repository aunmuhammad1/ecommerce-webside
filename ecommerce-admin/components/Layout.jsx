import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/nav"

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session) {
    return (
      <div className={'bg-blue-900 w-screen h-screen flex items-center'}>
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className={'bg-blue-900 w-screen h-screen flex'}>
          <Nav/>
          <div className="bg-white flex-grow mt-3 mr-4 rounded-lg p-4 mb-3">
            {children}
          </div>
      </div>
    )
  }
}
 