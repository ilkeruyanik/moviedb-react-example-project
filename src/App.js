import './App.css';
import MovieList from './components/movieListComponent/movieList';

function App() {

  const menus = [
    {
      name: 'Popüler Olanlar',
      menuItems: [{
        name: 'Yayın Akışı',
        uri: 'movie/now_playing'
      },
      {
        name: 'Televizyonda',
        uri: 'tv/popular'
      },
      {
        name: 'Filmler',
        uri: 'movie/popular'
      }]
    },
    {
      name: 'Trend',
      menuItems: [{
        name: 'Bugün',
        uri: 'trending/all/day'
      },
      {
        name: 'Bu hafta',
        uri: 'trending/all/week'
      }]
    }
  ];

  const list = menus.map((item, index) => {
      return (
        <div key={index} className='movie-list-container'>
          <MovieList menu_items={item.menuItems} name={item.name}/>
        </div>
      );
  });


  return (
    <div className='container'>
      {list}
    </div>
  );
}

export default App;
