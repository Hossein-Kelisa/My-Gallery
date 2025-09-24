// import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#photography">Photography</a>
          </li>
          <li>
            <a href="#videography">Videography</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
          <p>This is the home section.</p>
        </section>
        <section id="photography">
          <h1>Photography</h1>
          <p>This is the photography section.</p>
        </section>
        <section id="videography">
          <h1>Videography</h1>
          <p>This is the videography section.</p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>This is the contact section.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
