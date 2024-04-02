import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutUsCardContainer from "./components/AboutUsCardContainer"
import PhotosContainer from "./components/PhotosContainer";
import WhenWhere from "./components/WhenWhere"
import RSVP from "./components/RSVP";
export default function Home() {
  return (
    <main>
      <Hero
        title="Aviv & Ron"
        subtitle="INVITE YOU"
        subtitle2="TO THEIR WEDDING"
        subtitle3="CELEBRATION"
      />
      <AboutUsCardContainer />
      <PhotosContainer />
      <WhenWhere />
      <RSVP />




    </main>
  );
}
