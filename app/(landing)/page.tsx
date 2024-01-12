
import { LandingHero } from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";

const LandingPage = () => {
  return ( 
    <div className="h-full  ">
      <LandingNavbar />
      <div className="h-[calc(100%-72px)]  flex flex-col justify-center items-center">
      <LandingHero />
      </div>
   
    </div>
   );
}
 
export default LandingPage;
