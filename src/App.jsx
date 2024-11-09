import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Skills";
 

function App() {
  

  return (
    <> 

<div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">

    
    <Hero />   
    <Tech />
    <Projects />
    <Contacts />
    </main> 
    <Navbar />

    </>
  )
}

export default App
