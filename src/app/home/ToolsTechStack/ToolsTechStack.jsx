import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import styles from './ToolsTechStack.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

const tools = [
    {
      name: 'HTML',
      icon: '/icons/html5.png',
      color: '#E44D26'
    },
    {
      name: 'CSS',
      icon: '/icons/css3.png',
      color: '#1572B6'
    },
    {
      name: 'BOOTSTRAP',
      icon: '/icons/bootstrap.png',
      color: '#7952B3'
    },
    {
      name: 'JAVA SCRIPT',
      icon: '/icons/javascript.png',
      color: '#F7DF1E'
    },  
  // Add more tools as needed
];

const ToolsTechStack = () => {
  return (
    <section className={styles.toolsTechStack}>
      <div className={styles.container}>
        <h2 className={styles.title}>TOOLS & TECH STACK</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles.swiper}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className={styles.toolCard}>
                <div className={styles.iconWrapper}>
                  <img src={tool.icon} alt={tool.name} className={styles.icon} />
                </div>
                <h3 className={styles.toolName}>{tool.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ToolsTechStack;
