import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-[#05070b] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[6%] top-10 h-80 w-80 rounded-full bg-emerald-500/14 blur-3xl" />
        <div className="absolute right-[8%] top-36 h-[26rem] w-[26rem] rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0.94)_0%,rgba(7,10,16,0.98)_38%,rgba(4,6,10,1)_100%)]" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(226,232,240,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <NavBar />

      <main className="relative z-10">
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>

      <SocialLinks />
    </div>
  );
}

export default App;
