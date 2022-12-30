import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${() => css`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

    * {
      border: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 0;
      list-style: none;
      text-decoration: none;
      outline: none;
    };

    :root {
    --swiper-theme-color: #c4c4c4;
    }

    body,button, input, select {
      font-family: 'Open Sans', sans-serif;
    }

    body {
      background: #30293e;
    }

    .container {
      @media (max-width: 900px) {
        width: 80% !important;
      }

      @media (max-width: 600px) {
        width: 90%;
      }
    }

    .label {
      font-size: 22px;
      position: absolute;
      left: 9px;
      bottom: 7px;
      transition: all 0.4s ease;
      color: #c4c4c4;
      cursor: text;
    }

    .display {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .headerFilter, .sectionFilter {
      transition: filter 0.7s ease;
      filter: blur(2px);
    };

    .root {
      position: relative;
    };

    .swiper {
      margin-top: 30px;
      position: static;
      overflow-y: visible;
      width: 100%;
      overflow-x: hidden;
    }

    .swiper-wrapper {
      position: relative;
    }

    .swiper-button-prev, .swiper-button-next {
      position: absolute;
      border-radius: 50%;
      z-index: 1;
      left: auto;

      @media (max-width: 900px) {
        display: none;
      };
    }

    .swiper-button-prev {
      left: -70px;
    }

    .swiper-button-next {
      right: -50px;
    }

    .swiper-scrollbar-drag, .swiper-scrollbar {
      display: none;
    }

    .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
      bottom: -50px;
      z-index: 1;
    }

    .swiper-pagination-bullet {
      background-color: white;
    }

    .columnStyle {
      display: flex;
    flex-direction: column;
    gap: 10px;
    }
  `}
`;
