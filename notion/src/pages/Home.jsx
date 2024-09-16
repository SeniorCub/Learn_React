import DisplaySection from "../components/DisplaySection"
import EverythingSection from "../components/EverythingSection"
import ExamplePage from "../components/ExamplePage"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import HeroSection from "../components/HeroSection"
import NextSection1 from "../components/NextSection1"

const Home = () => {
     return (
     <>
         <HeroSection />
         <DisplaySection />
         <ExamplePage />
         <NextSection1 />
         <EverythingSection />
         <GetStarted />
         <hr className="text-gray2 mx-3" />
         <Footer /> 
     </>
     )
}

export default Home
