
import './App.css'
import Faqsection from './components/Faqsection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Reason from './components/Reason'
import Subscribe from './components/Subscribe'
import Trending from './components/Trending'

function App() {
     return (
          <>   
               <HeroSection/>
               <Trending/>
               <Reason/>
               <Faqsection />
               <Subscribe />
               <Footer />
          </>
     )
}

export default App
