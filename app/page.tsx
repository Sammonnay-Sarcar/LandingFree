import { Hero } from "./components/Hero";
import { Perks } from "./components/Perks";
import { NewArrival } from "./components/sections/NewArrival";
import { OurBlogs } from "./components/OurBlogs";


export default function Home() {
  return (
    <>
      <Hero />
      <Perks />
      <NewArrival/>
      <OurBlogs/>
      
    </>
  );
}
