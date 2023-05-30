import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Knowledge from "@/components/Knowledge";
import Main from "@/components/Main";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div className="h-full sm:">
      <Header />
      <Main />
      <About />
      <Knowledge />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}