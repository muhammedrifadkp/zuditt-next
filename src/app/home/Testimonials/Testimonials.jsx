import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import { FaPlay, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Anjali Nair',
    image: '/testimonials/person1.jpg',
    text: 'Amazing experience with the team! They understood our requirements and delivered an outstanding website on time.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Vishnu Pillai',
    image: '/testimonials/avatar1.jpg',
    text: 'The team was fantastic in executing our vision. The website is user-friendly and aesthetically pleasing.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Radhika Menon',
    image: '/testimonials/person3.jpg',
    text: 'Excellent service! They took our feedback seriously and created a website that we’re proud of. Truly professional and reliable!',
    rating: 5,
  },
];

const stats = [
  { label: 'HAPPY CUSTOMERS', value: '350+' },
  { label: 'PROJECTS COMPLETED', value: '120+' },
  { label: 'REVIEW RATING', value: '4.9/5' },
];

const Testimonials = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>TESTIMONIALS</h2>
        
        {/* Video Section */}
        <div className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            {!playing ? (
              <div className={styles.videoThumbnailWrapper}>
                <img
                  src="/testimonials/video-thumbnail.jpg"
                  alt="Video Thumbnail"
                  className={styles.videoThumbnail}
                />
                <div className={styles.playButton} onClick={handlePlayClick}>
                  <FaPlay className={styles.playIcon} />
                </div>
              </div>
            ) : (
              <iframe
                className={styles.videoIframe}
                src="https://www.youtube.com/embed/FO-SA-Mxytg?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className={styles.testimonialAvatars}>
            {['/testimonials/avatar1.jpg', '/testimonials/avatar2.jpg', '/testimonials/avatar3.jpg', '/testimonials/avatar4.webp'].map((avatar, index) => (
              <div
                key={index}
                className={`${styles.avatar} ${styles[`avatar${index + 1}`]}`}
              >
                <img
                  src={avatar}
                  alt={`Testimonial ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <h2 className={styles.praiseTitle}>WORDS OF PRAISE</h2>

        {/* Testimonial Cards */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles.testimonialSlider}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={styles.testimonialCard}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.testimonialImage}
                />
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.stars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                  ))}
                </div>
                <h3 className={styles.testimonialName}>{testimonial.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats Section */}
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h3 className={styles.statValue}>{stat.value}</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
