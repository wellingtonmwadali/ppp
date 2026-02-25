import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollRevealProvider />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
