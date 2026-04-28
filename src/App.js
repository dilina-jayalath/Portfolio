import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-[#f4efe8] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8%] top-16 h-72 w-72 rounded-full bg-[#f9c784]/45 blur-3xl" />
        <div className="absolute right-[10%] top-48 h-96 w-96 rounded-full bg-[#86efac]/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[#93c5fd]/25 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,239,232,0.96)_0%,rgba(248,250,252,0.97)_40%,rgba(237,244,248,0.98)_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
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
