import Head from "@/app/components/Header";
import Empow from "@/app/components/Empowering";
import Mainlanding from "@/app/components/Mainlanding";
import Ads from "@/app/components/Ads";
import Theory from "@/app/components/Theory";
import Features from "@/app/components/Features";
import Works from "@/app/components/Works";
import Imageline from "@/app/components/Imageline";
import Backers from "@/app/components/Backers";
import FAQ from "@/app/components/Faq";
import Advisor from "@/app/components/Advisor";
import Team1 from "@/app/components/Team";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <div>
      <div className="bg-black">
        <div className="">
          <Head />
        </div>

        <div className="">
          <Empow />
        </div>

        <div>
          <Mainlanding />
        </div>

        <Ads />
        <div className="">
          <Theory />
        </div>

        <div>
          <Features />
        </div>

        <div>
          <Works />
        </div>

        <div>
          <Imageline />
        </div>

        <div>
          <Backers />
        </div>

        <div>
          <FAQ />
        </div>

        <div>
          <Advisor />
        </div>

        <div>
          <Team1 />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
