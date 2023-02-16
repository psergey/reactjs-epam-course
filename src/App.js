import logo from './logo.svg';
import './App.css';
import MovieCards from './components/movie-roulette/MovieCards';
import RouletteLabel from './components/roulette-label/RouletteLabel';
import Search from './components/search/Search';
import MovieFilter from './components/movie-filter/MovieFilter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className='content-wrapper'>
        <header>
          <Search />
        </header>
        <main>
          <MovieFilter />
          <ErrorBoundary>
            <MovieCards />
          </ErrorBoundary>
        </main>
        <footer>
          <RouletteLabel />
        </footer>

      </div>

    </div>
  );
}

export default App;
