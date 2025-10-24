import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { Perks } from "./components/Perks";
import { NewArrival } from "./components/NewArrival";
import { OurBlogs } from "./components/OurBlogs";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Perks />
      <NewArrival/>
      <OurBlogs/>
      <Footer/>
    </>
  );
}
