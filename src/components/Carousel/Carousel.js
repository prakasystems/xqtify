// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import styles from './Carousel.module.css';

// // Custom navigation button SVG
// const NextButton = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//     {/* Paste the SVG from https://www.svgrepo.com/svg/433009/chevron-right-square */}
//     <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15l-5-5 1.41-1.41L12 14.17l3.59-3.59L17 13l-5 5z"/>
//   </svg>
// );

// const PrevButton = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//     {/* Rotated version for previous */}
//     <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10l-5 5-1.41-1.41L14.17 12l-3.59-3.59L12 7l5 5z"/>
//   </svg>
// );

// function Carousel() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch('https://picsum.photos/v2/list')
//       .then(response => response.json())
//       .then(data => {
//         // Take first 10 images for carousel
//         const firstTenImages = data.slice(0, 10);
//         setImages(firstTenImages);
//       })
//       .catch(error => console.error('Error fetching images:', error));
//   }, []);

//   return (
//     <div className={styles.carouselContainer}>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={3}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         pagination={{ clickable: true }}
//         className={styles.swiper}
//       >
//         {images.map((image) => (
//           <SwiperSlide key={image.id}>
//             <img 
//               src={`https://picsum.photos/id/${image.id}/500/300`} 
//               alt={image.author}
//               className={styles.image}
//             />
//           </SwiperSlide>
//         ))}
//         <div className={`swiper-button-prev ${styles.navButton}`}>
//           <PrevButton />
//         </div>
//         <div className={`swiper-button-next ${styles.navButton}`}>
//           <NextButton />
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;


import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Carousel.module.css';

const Carousel = ({ 
  data = [], 
  renderComponent, 
  title, 
  navId 
}) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(2);
      } else if (width < 768) {
        setSlidesPerView(2);
      } else if (width < 1024) {
        setSlidesPerView(3);
      } else if (width < 1280) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className={styles.carouselContainer} data-carousel-id={navId}>
      {title && <h2 className={styles.carouselTitle}>{title}</h2>}
      
      <div className={styles.carouselWrapper}>
        <LeftNavigation 
          onClick={handlePrev} 
          disabled={isBeginning}
        />
        
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className={styles.swiperContainer}
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id || index} className={styles.swiperSlide}>
              {renderComponent(item)}
            </SwiperSlide>
          ))}
        </Swiper>
        
        <RightNavigation 
          onClick={handleNext} 
          disabled={isEnd}
        />
      </div>
    </div>
  );
};

export default Carousel;