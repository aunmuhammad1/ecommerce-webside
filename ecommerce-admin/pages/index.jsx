// import Layout from "@/components/Layout";
// import { useSession } from "next-auth/react";
import Scraper from "./scraper";

export default function Home() {
  return (
    <Scraper/>
  // const {data: session} = useSession();
  // if(!session) return (
  //   <Layout/>
  // );
  // return (
  //   <Layout>
  //     <div className="text-blue-900 flex justify-between items-center">
  //       <h2>
  //         Hello, {session.user.name}
  //       </h2>
  //       <div className="flex gap-2 text-black items-center">
  //         <img src={session.user.image} className="rounded-full w-10 h-10 "/>
  //         <h2>{session.user.name}</h2>
  //       </div>
  //     </div>
  //   </Layout>
  )
}
 