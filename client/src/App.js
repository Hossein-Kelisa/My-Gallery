import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#photos">Photos</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        <section id="home">
          <h1>Welcome to Our Gallery</h1>
          <p>This is the home section.</p>
        </section>
        <section id="photos">
          <h1>Photo Album</h1>
          <p>This is the photo album section.</p>
        </section>
        <section id="videos">
          <h1>Video Gallery</h1>
          <p>This is the video gallery section.</p>
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
