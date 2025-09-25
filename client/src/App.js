import "./App.css";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Photos from "./components/Photos";
import Videos from "./components/Videos";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Hero />
        <Photos />
        <Videos />
        <Contact />
      </main>
    </div>
  );
}

export default App;
