import P from 'prop-types';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper } from 'swiper/react';
// import { useMoviesContext } from '../../Contexts/context';

export const SwiperComponent = ({ children }) => {
  // const { width } = useMoviesContext();
  // spaceBetween={
  //   width >= 900 ? 50 : width < 600 ? 30 : width < 426 ? 20 : 50
  // }
  return (
    <Swiper
      effect="cards"
      className="slider"
      spaceBetween={20}
      slidesPerView={4}
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
