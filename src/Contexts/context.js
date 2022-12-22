import { createContext, useContext, useState } from 'react';
import P from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const moviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const navigate = useNavigate();
  const getStorageLogged = JSON.parse(localStorage.getItem('movieLogged'));
  const getStorageAccount = JSON.parse(localStorage.getItem('movieAccount'));
  const [logged, setLogged] = useState(getStorageLogged || {});
  const [movieAccount, setMovieAccount] = useState(getStorageAccount || []);
  const [link, setLink] = useState(false);
  const [page, setPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);

  // const [width, setWidth] = useState(window.innerWidth);

  // const detectSize = () => {
  //   setWidth(window.innerWidth);
  // };

  //   window.addEventListener('resize', detectSize);

  // return () => {
  //   window.removeEventListener('resize', detectSize);
  // };

  const moviesObject = {
    movieAccount,
    setMovieAccount,
    navigate,
    setLink,
    link,
    logged,
    setLogged,
    setOpenMenu,
    openMenu,
    page,
    setPage,
  };

  return (
    <moviesContext.Provider value={moviesObject}>
      {children}
    </moviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(moviesContext);
  if (context === undefined) {
    throw new Error(
      'useCheckoutContext must be used within a CheckoutProvider',
    );
  }
  return context;
};

MoviesProvider.propTypes = {
  children: P.node.isRequired,
};
