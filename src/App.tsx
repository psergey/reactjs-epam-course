import './App.css';
import Search from './components/search/Search';
import Counter from './components/counter/Counter';
import GenreSelector from './components/genre-selector/GenreSelector';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

function App() {
  return (
    <div className="App">
      <Counter start={10} />

      <Search query="Find" onSearch={(value: string) => console.log(value)} />

      <div className="genreSelection">
        <GenreSelector
          genres={genres}
          currentGenre="Documentary"
          onSelected={(selected: string) => console.log(selected)}
        />
      </div>
    </div>
  );
}

export default App;
