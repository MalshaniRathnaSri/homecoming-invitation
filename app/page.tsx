import HeroSection from "./components/homecoming/HeroSection";
import WelcomeSection from "./components/homecoming/WelcomeSection";
import CoupleSection from "./components/homecoming/CoupleSection";
import CelebrationSection from "./components/homecoming/CelebrationSection";
import ParentsSection from "./components/homecoming/ParentsSection";
import HomecomingDetails from "./components/homecoming/HomecomingDetails";
import CountdownSection from "./components/homecoming/CountdownSection";
import RSVPSection from "./components/homecoming/RSVPSection";
import FinalSection from "./components/homecoming/FinalSection";
import MusicPlayer from "./components/homecoming/MusicPlayer";

export default function Home() {
  return (
     <main className="overflow-hidden bg-[#3B1118] text-[#f5f1e8]">
      <HeroSection />
      <WelcomeSection />
      <CoupleSection />
      <CelebrationSection />
      <ParentsSection />
      <HomecomingDetails />
      <CountdownSection />
      <RSVPSection />
      <FinalSection />
      <MusicPlayer />
    </main>
  );
}
