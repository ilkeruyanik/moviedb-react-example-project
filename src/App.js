import logo from './logo.svg';
import './App.css';
import Score from './components/scoreComponent/score';
import Movie from './components/movieComponent/movie'

function App() {

  const movie_data = {
    poster_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg',
    title: 'The Good Doctor',
    score: 89,
    release_date: '09-09-2021'
  };

  return (
    <div>
      <Movie movie_data={movie_data}/>
    </div>
  );
}

export default App;
