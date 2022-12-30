import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './Constants/styles/global-styles';
import { MoviesProvider } from './Contexts/context';
import { Home } from './Pages/Home/index';
import { MyList } from './Pages/MyList/index';
import { MovieDetails } from './Pages/MovieDetails/index';
import { Search } from './Pages/Search/index';
import { SeriesDetails } from './Pages/SeriesDetails';
import { Header } from './Components/Header';
import { MenuSide } from './Components/MenuSide';
import { Login } from './Pages/Login/index';
import { Register } from './Pages/Register/index';
import { SelectPhoto } from './Pages/SelectPhoto';

export const PagesRoutes = () => {
  return (
    <Router>
      <MoviesProvider>
        <Header />
        <MenuSide />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/selectPhoto" element={<SelectPhoto />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/series/:id" element={<SeriesDetails />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <GlobalStyles />
      </MoviesProvider>
    </Router>
  );
};
