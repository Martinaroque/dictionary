import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
          <main>
            <Dictionary />
          </main>
        </header>
        <footer className="text-center">
          {" "}
          <small>
            {" "}
            Coded by Martina Roque and is{" "}
            <a
              href="https://github.com/Martinaroque/dictionary"
              rel="noopener noreferrer"
              target="_blank"
            >
              open-source in GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
