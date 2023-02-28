import './App.css';
import Row from './Components/Row'
import requests from './request';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
     <Row isPoster={true} title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title='Trending' fetchUrl={requests.fetchTrending}/>
     <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
     <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
     <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
     <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
     <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>  
     <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
