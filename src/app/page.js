import Hero from "./components/hero";
import FounderMessage from "./components/founder-message";
import SellingPoints from "./components/selling-points";
import QuitJob from "./components/quit-job";
import ApplicationProcess from "./components/application-process";
import WhoSuitable from "./components/who-suitable";
import IsThisForBeginners from "./components/is-this-for-beginners";
import WhatYouWilllearn from "./components/what-you-will-learn";
import Timeline from "./components/timeline";
import FulltimeParttimeTable from "./components/fulltime-parttime-table";
import Faq from "./components/faq";
import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FounderMessage />
      <IsThisForBeginners />
      <WhoSuitable />
      <SellingPoints />
      <QuitJob />
      <ApplicationProcess />
      <WhatYouWilllearn />
      <Timeline />
      <FulltimeParttimeTable />
      <Faq />
    </div>
  );
}
