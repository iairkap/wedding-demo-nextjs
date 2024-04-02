import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutUsCardContainer from "./components/AboutUsCardContainer"
import PhotosContainer from "./components/PhotosContainer";
import WhenWhere from "./components/WhenWhere"
import RSVP from "./components/RSVP";
import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero
        title="Aviv & Ron"
        subtitle="INVITE YOU"
        subtitle2="TO THEIR WEDDING"
        subtitle3="CELEBRATION"
      />
      <div id="aboutUs">
        <AboutUsCardContainer />
      </div>
      <div id="photos">
        <PhotosContainer />
      </div>
      <div id="whenWhere">
        <WhenWhere />
      </div>
      <div id="rsvp">
        <RSVP />
      </div>
    </main>
  );
}