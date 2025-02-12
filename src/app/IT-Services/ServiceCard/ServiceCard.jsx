import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, image, isAlternate }) => {
  return (
    <div 
      className={`${styles.content} ${isAlternate ? styles.alternate : ''}`}
      data-aos={isAlternate ? "fade-left" : "fade-right"}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.textContent}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button className={styles.quoteButton}
       
       onClick={() =>
        window.open(
          `https://wa.me/7994730307?text=I'm%20interested%20in%20your%20${encodeURIComponent(
            title
          )}%20services. Can you provide more details?`,
          "_blank"
        )
      }
       >Get a quote</button>
      </div>
    </div>
  );
};

export default ServiceCard;