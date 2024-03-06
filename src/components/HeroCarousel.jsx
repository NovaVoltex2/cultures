//import imgaes import   tribe2 from './images/tribe2.jpeg';
import tribe3 from './images/tribe3.jpeg';
import Nso1 from './images/Nso1.jpeg'
import tribe2 from './images/tribe2.jpeg'
import { Autoplay,EffectCoverflow} from 'swiper/modules';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const HeroCarousel = () => {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        slidesPerView={'3'}
        loop={true}
        speed={1000}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
      <SwiperSlide><img src={Nso1} alt="" /></SwiperSlide>
    <SwiperSlide><img src={tribe2} alt="" /></SwiperSlide>
    <SwiperSlide><img src={tribe3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={tribe2} alt="" /></SwiperSlide>
      ...
    </Swiper>
  )
}

export default HeroCarousel

