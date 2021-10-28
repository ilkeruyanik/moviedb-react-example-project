import './App.css';
import MovieList from './components/movieListComponent/movieList';

function App() {

  const popular_movies_menu_items = [{
    name: 'Yayın Akışı',
    type: 'all'
  },
  {
    name: 'Televizyonda',
    type: 'tv'
  },
  {
    name: 'Filmler',
    type: 'movie'
  }];

  const trends_movies_menu_item = [{
      name: 'Bugün',
      type: 'day'
    },
    {
      name: 'Bu hafta',
      type: 'week'
    }];


  return (
    <div className='container'>
      <div className='movie-list-container'>
        <MovieList menu_items={popular_movies_menu_items} name='Popüler Olanlar'/>
      </div>
      <MovieList menu_items={trends_movies_menu_item} name='Trend'/>
    </div>
  );
}

export default App;
