// App.tsx
import { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ContentBody from "./ContentBody";
import Footer from "./Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <HeroSection />
      <ContentBody />
      <Footer />
    </div>
  );
}

export default App;
