import P from 'prop-types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper } from 'swiper/react';
import { useMoviesContext } from '../../Contexts/context';

export const SwiperComponent = ({ children }) => {
  const { width } = useMoviesContext();
  return (
    <Swiper
      effect="cards"
      className="slider"
      spaceBetween={
        width > 1300 && width < 1441
          ? 20
          : width >= 900 && width < 1025
          ? 20
          : width > 600 && width < 769
          ? 30
          : width < 426
          ? 20
          : 20
      }
      slidesPerView={
        width > 1300 && width < 1441
          ? 3
          : width < 1025 && width >= 900
          ? 2
          : width < 426
          ? 1
          : width > 600 && width < 769
          ? 2
          : 4
      }
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
};

SwiperComponent.propTypes = {
  children: P.node.isRequired,
};
